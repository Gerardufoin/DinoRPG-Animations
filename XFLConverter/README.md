# XFLConverter

Convert XFL assets and animation into SVG for assets and JSON for animations.

This tool is not meant to be used in a generic way but to assist me on the main project.
The entry point of the program will definitely be a mess, keep that in mind if you are trying to use this for whatever reason.

## SWF to FLA

MotinTwin did not seem to provide every Flash assets with their FLA format. Some of them had to be ripped off the website in their compiled SWF format.
When this is the case, a software such as [JPEXS Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler) can be used to convert the file back to FLA.

## FLA to XFL

To obtain the FLA data under its XFL format, rename the file from .fla to .zip.
You can then extract it like a normal ZIP file. Once done, you will obtain a LIBRARY folder full of XML files containing the XFL information of the animations, assets and scripts.
The "main" script will be part of the DOMDocument.xml file at the root of the extracted FLA.

To my knowledge XFL does not have an official documentation, so most of the code here is guess work on my end and research done by other users.
As such take it with a grain of salt.

## Project Setup

```sh
npm install
```

### Start tool

```sh
npm run start
```
