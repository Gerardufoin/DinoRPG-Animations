// @ts-check
import { dinoz, error } from './sdino/dinoz.js';
import { Animator } from './display/Animator.js';
import { PartManager } from './display/PartManager.js';
import { PixiHelper } from './display/PixiHelper.js';

/**
 * Abstract class allowing the instantiation of both sdino.swf and dino.swf.
 */
export class ADino extends Animator {
	/**
	 * Colors for the default palette.
	 * @type {string[]}
	 */
	static DEFAULT_COLORS = [
		'#FFF2DF',
		'#FFCC79',
		'#FFAA1E',
		'#ECFFD9',
		'#CBFF97',
		'#D5EAFF',
		'#97CBFF',
		'#8BA3D7',
		'#DF7E37',
		'#B85F1D',
		'#D31818',
		'#FFF9AE',
		'#F0DC99'
	];
	/**
	 * Default palette for the dino if none is found.
	 * @type {string[][]}
	 */
	static DEFAULT_PALETTE = [ADino.DEFAULT_COLORS, ADino.DEFAULT_COLORS, ADino.DEFAULT_COLORS, ADino.DEFAULT_COLORS];

	/**
	 * Object containing all the information relative to a dino (name, parts, animations, etc).
	 * @type {object}
	 */
	_dinoInfos;
	/**
	 * Return the appropriate dinoz data depending on the size given at startup.
	 * @type {object}
	 */
	get dinoInfos() {
		// TODO: Simplify once all dinoz are converted to big/small format.
		if (this._big && this._dinoInfos.big) {
			return this._dinoInfos.big;
		}
		if (!this._big && this._dinoInfos.small) {
			return this._dinoInfos.small;
		}
		return this._dinoInfos;
	}
	/**
	 * Color palette of the dino.
	 * @type {Array}
	 */
	_palette;
	/**
	 * Raw code data received at init time.
	 * @type {string}
	 */
	_code = '';
	/**
	 * If true, the dino's shadow is baked into the entity.
	 * @type {boolean}
	 */
	_castShadow = true;
	/**
	 * Is the dino in its big or small format.
	 * @type {boolean}
	 */
	_big = true;

	/**
	 * Create a dino based on the data parameter.
	 * @param {object} data Object containing the data describing a dino.
	 * @param {boolean} big If true, the dinoz is instantiated as its big static format. Otherwise it will be instantiated as its small animated format.
	 */
	constructor(data, big) {
		super(data.autoUpdate ?? true);
		this._big = big;
		this._castShadow = data.shadow ?? true;
		this.init(data.data, data.damages, data.pflag, data.scale);
		this.flip(data.flip);
		if (data.dark) {
			this.darken();
		}
	}

	/**
	 * Convert a code to a specific number.
	 * Basically convert the ASCII code of [0-9A-Za-z] to a number between 0 to 62 or return 63 otherwise.
	 * @param {number} n The ASCII code of a character.
	 * @returns {number} A number between 0 and 63.
	 */
	decode62(n) {
		if (n >= 48 && n <= 58) {
			return n - 48;
		}
		if (n >= 65 && n <= 90) {
			return n - 65 + 10;
		}
		if (n >= 97 && n <= 122) {
			return n - 97 + 36;
		}
		return 63;
	}

	/**
	 * Select the color palette based on the customization of the dino.
	 * @param {Array} dParts Array customizing the dino.
	 * @returns {void}
	 */
	initPalette(dParts) {
		if (this._dinoInfos) {
			// Rare colors
			if (dParts?.length > 14 && dParts[14] <= 9 && dParts[14] > 0) {
				// If idx is greater than the palette number, we can it at the last palette.
				const palIdx = Math.min(dParts[14], this._dinoInfos.palette.length - 1);
				this._palette = this._dinoInfos.palette[palIdx];
			}
			if (!this._palette) {
				this._palette = this._dinoInfos.palette[0];
			}
		}
		if (!this._palette) {
			this._palette = ADino.DEFAULT_PALETTE;
		}
	}

	/**
	 * Apply the customization to the sdino.
	 * Will select all the parts and subparts based on the given customization array.
	 * @param {Array} dParts The customization array given at the class creation.
	 */
	apply(dParts) {
		if (this.dinoInfos.transforms) {
			this.setBodyTransforms(this.dinoInfos.transforms, dParts);
		}
		const scaling = Math.max(this._body.scale.x, this._body.scale.y);
		// If this is a big dino, the part scaling change depending on the parameter at idx 1, which is the dino growing or if it is a demon.
		const partsScaling = PartManager.getAnimationsScaling(this.dinoInfos.animations, this._big ? dParts[1] : 0);
		for (let pName in this.dinoInfos.parts) {
			let part = PartManager.createPart(
				this.dinoInfos.parts[pName],
				dParts,
				this._palette,
				this._body._scale,
				scaling * (partsScaling[pName] ?? 1)
			);
			if (part) {
				this.addPart(pName, part);
			}
		}
		if (this._castShadow && this.dinoInfos.shadow) {
			const shadow = PartManager.getSubPart(this.dinoInfos.shadow, dParts, this._palette, this._body._scale);
			if (shadow) {
				this.addChildAt(shadow, 0);
			}
		}
		// Accessories are added at the top layer of the dino and are not affected by the body glow
		if (this.dinoInfos.accessories) {
			for (let pName in this.dinoInfos.accessories) {
				const part = PartManager.createPart(
					this.dinoInfos.accessories[pName],
					dParts,
					this._palette,
					this._body._scale,
					scaling * (partsScaling[pName] ?? 1)
				);
				if (part) {
					this.addChild(part);
				}
			}
		}
		if (this.dinoInfos.glow) {
			this.setBodyGlow(this.dinoInfos.glow);
		}
	}

	/**
	 * Initialize the dino based on the data given at startup.
	 * @param {string} data Customization string for the dino. Will decide the species and the parts to display.
	 * @param {number} damages Amount of damages taken by the dino. Is useless for sdino.
	 * @param {boolean} pflag If false, the dino will not play its animation and stay at frame 0 of the "stand" animation.
	 * @param {number} scale Scale of the dino. Needed to correctly load the SVG.
	 * @returns {boolean} True if the dino has loaded correctly, false otherwise.
	 */
	init(data, damages, pflag = false, scale = 1) {
		this._body._scale = scale;
		let dParts = [];
		this._code = data;
		for (let i = 0; i < data?.length ?? 0; ++i) {
			let part = this.decode62(data.charCodeAt(i));
			dParts.push(part);
		}
		const infos = dinoz[dParts[0]];
		this._dinoInfos =
			infos && infos.partIdx !== undefined
				? infos.parts[infos.frames[dParts[infos.partIdx] % infos.frames.length]]
				: infos;
		// TODO: Remove the big condition once all dinoz are migrated to big/small version
		if (!this._dinoInfos || dParts.length < 10 || (this._big && !this._dinoInfos.big)) {
			this._dinoInfos = error;
			this.apply(dParts);
			return false;
		}
		dParts.splice(2, 0, damages ?? 0);
		this.initPalette(dParts);
		this.apply(dParts);
		this.setAnimations(this.dinoInfos.animations);
		this.playAnim('stand');
		this.playing = pflag;
		if (this._big) {
			this.playing = false;
			this.setFrame(PixiHelper.mm(0, dParts[1], this.getCurrentAnimationLength() - 1));
			this._body.stop();
		}
		return true;
	}

	/**
	 * Recreate the chk code needed to validate the parameters in Motion-Twin sdino.swf file.
	 * @returns {number} The chk code based on the initialization code of the dino.
	 */
	getChkCode() {
		let chk = 0;
		for (let i = 0; i < (this._code?.length ?? 0); ++i) {
			let tmp = this.decode62(this._code.charCodeAt(i));
			tmp = tmp ^ ((tmp >> 3) & 11795912);
			tmp = (tmp << 2) + tmp + (tmp & 255);
			chk = ((chk * 5) ^ tmp) & 268435455;
		}
		return chk;
	}
}

/* SWF original code

pMax = 10;
var defpal = [16773855,16764025,16755230,15531993,13369239,14019327,9948159,9151447,14646839,12082973,13834264,16775598,15785113];
palette = [defpal,defpal,defpal,defpal];

function decode62(n)
{
   if(n >= 48 && n <= 58)
   {
      return n - 48;
   }
   if(n >= 65 && n <= 90)
   {
      return n - 65 + 10;
   }
   if(n >= 97 && n <= 122)
   {
      return n - 97 + 36;
   }
   return 63;
}
function _init(data, dam, pflag)
{
   _p0._box._visible = false;
   cl = data.split(";");
   if(data == null || cl.length == 1)
   {
      var _loc4_ = 0;
      cl = new Array();
      var _loc3_ = 0;
      while(_loc3_ < data.length)
      {
         var _loc2_ = decode62(data.charCodeAt(_loc3_));
         cl.push(_loc2_);
         _loc2_ = _loc2_ ^ _loc2_ >> 3 & 11795912;
         _loc2_ = (_loc2_ << 2) + _loc2_ + (_loc2_ & 255);
         _loc4_ = (_loc4_ * 5 ^ _loc2_) & 268435455;
         _loc3_ = _loc3_ + 1;
      }
      if(pflag == null && _loc4_ != _root.chk)
      {
         _p0.gotoAndStop("bad");
         body._p0.gotoAndStop("bad");
         return false;
      }
      cl.splice(2,0,dam);
      initPalette();
      playAnim = pflag;
      apply();
      return true;
   }
   return false;
}
function initPalette()
{
   var _loc7_ = this.attachMovie("palette","palinst",0);
   if(_loc7_ == null)
   {
      return undefined;
   }
   _loc7_.gotoAndStop(cl[0] + 1);
   if(cl.length >= 14)
   {
      if(cl[14] <= 9 && _loc7_.pal != null)
      {
         _loc7_.pal.gotoAndStop(1 + cl[14]);
      }
   }
   var _loc8_ = _loc7_.getBounds(_loc7_);
   var _loc6_ = new flash.display.BitmapData(_loc8_.xMax,_loc8_.yMax);
   _loc6_.draw(_loc7_);
   _loc7_.removeMovieClip();
   palette = new Array();
   var _loc4_ = 0;
   while(_loc4_ < 4)
   {
      var _loc3_ = new Array();
      var _loc5_ = _loc4_ * 15 + 7;
      while(true)
      {
         var _loc2_ = _loc6_.getPixel32(_loc3_.length * 15 + 7,_loc5_);
         if(_loc2_ == 0 || _loc2_ == -1)
         {
            break;
         }
         _loc3_.push(_loc2_ & 16777215);
      }
      palette.push(_loc3_);
      _loc4_ = _loc4_ + 1;
   }
   _loc6_.dispose();
}
function apply()
{
   applyRec(this);
   applyStatus();
}
function applyRec(mc)
{
   for(var _loc7_ in mc)
   {
      var _loc1_ = mc[_loc7_];
      if(typeof _loc1_ == "movieclip")
      {
         var _loc2_ = null;
         if(_loc1_._name.substr(0,2) == "_p")
         {
            var _loc4_ = int(_loc1_._name.substr(2,1));
            var _loc3_ = cl[_loc4_] % _loc1_._totalframes;
            _loc1_.gotoAndStop(_loc3_ + 1);
            if(_loc1_._name.substr(3,3) == "col")
            {
               _loc2_ = int(_loc1_._name.substr(6,1));
            }
         }
         else if(_loc1_._name.substr(0,4) == "_col")
         {
            _loc2_ = int(_loc1_._name.substr(4,1));
         }
         else if(_loc1_._name.substr(0,8) == "_special" && cl.length >= 15)
         {
            _loc3_ = cl[15];
            if(_loc3_ > 0)
            {
               _loc1_._visible = true;
               _loc1_.gotoAndStop(_loc3_ + 1);
            }
            else
            {
               _loc1_._visible = false;
            }
         }
         if(!playAnim)
         {
            _loc1_.stop();
         }
         if(_loc2_ != null)
         {
            var _loc5_ = palette[_loc2_];
            setColor(_loc1_,_loc5_[cl[pMax + _loc2_] % _loc5_.length]);
         }
         applyRec(_loc1_,_loc4_);
      }
   }
}
function setColor(mc, col)
{
   var _loc1_ = {r:col >> 16,g:col >> 8 & 255,b:col & 255};
   var _loc2_ = new Color(mc);
   var _loc3_ = {ra:100,ga:100,ba:100,aa:100,rb:_loc1_.r - 255,gb:_loc1_.g - 255,bb:_loc1_.b - 255,ab:0};
   _loc2_.setTransform(_loc3_);
}
function applyStatus()
{
   var _loc4_ = body._p0._p1;
   switch(status)
   {
      case "congel":
         var _loc1_ = new flash.filters.GlowFilter();
         _loc1_.blurY = _loc0_ = 14;
         _loc1_.blurX = _loc0_;
         _loc1_.strength = 1;
         _loc1_.color = 16777215;
         _loc1_.inner = true;
         var _loc3_ = new flash.filters.GlowFilter();
         _loc3_.blurY = _loc0_ = 4;
         _loc3_.blurX = _loc0_;
         _loc3_.strength = 10;
         _loc3_.color = 16777215;
         var _loc2_ = new flash.filters.GlowFilter();
         _loc2_.blurY = _loc0_ = 1.5;
         _loc2_.blurX = _loc0_;
         _loc2_.strength = 2.3;
         _loc2_.color = 6684672;
         var _loc5_ = new flash.filters.ColorMatrixFilter([0.6948261260986328,0.4100043475627899,0.05516961216926575,0,-13.64000415802002,0.2076261192560196,0.8972043395042419,0.05516961216926575,0,-13.64000415802002,0.2076261192560196,0.4100043475627899,0.5423696041107178,0,-13.64000415802002,0,0,0,1,0]);
         _loc4_.filters = [_loc1_,_loc3_,_loc2_,_loc5_];
         new Color(_loc4_).setTransform({ra:100,ga:100,ba:100,aa:100,rb:-21,gb:0,bb:135,ab:0});
         break;
      case "death":
   }
}
if(!_init(_root.data,int(_root.damages)))
{
   _p0.gotoAndStop("bad");
   body._p0.gotoAndStop("bad");
}
if(_root.flip != null)
{
   body._xscale = -100;
}
if(_root.alpha != null)
{
   _root._alpha = int(_root.alpha);
   _root.blendMode = "layer";
}

_p0._box._visible = false;
if(_root.flip == 1)
{
   _p0._xscale = -100;
}
*/
