/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*set Stylesheet\\nv1.6.1\\nLast Updated: 2010-09-17\\nAuthor: Richard Clark - http://richclarkdesign.com\\nTwitter: @rich_clark\\n*/\\nhtml, body, div, span, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\nabbr, address, cite, code,\\ndel, dfn, em, img, ins, kbd, q, samp,\\nsmall, strong, sub, sup, var,\\nb, i,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent; }\\n\\nbody {\\n  line-height: 1; }\\n\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nnav ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\na {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent; }\\n\\n/* change colours to suit your needs */\\nins {\\n  background-color: #ff9;\\n  color: #000;\\n  text-decoration: none; }\\n\\n/* change colours to suit your needs */\\nmark {\\n  background-color: #ff9;\\n  color: #000;\\n  font-style: italic;\\n  font-weight: bold; }\\n\\ndel {\\n  text-decoration: line-through; }\\n\\nabbr[title], dfn[title] {\\n  border-bottom: 1px dotted;\\n  cursor: help; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* change border colour to suit your needs */\\nhr {\\n  display: block;\\n  height: 1px;\\n  border: 0;\\n  border-top: 1px solid #cccccc;\\n  margin: 1em 0;\\n  padding: 0; }\\n\\ninput, select {\\n  vertical-align: middle; }\\n\\n.header {\\n  background-color: #F4BB19;\\n  position: relative;\\n  height: 630px; }\\n  .header__wrap {\\n    max-width: 1000px;\\n    margin: auto; }\\n  .header__nav {\\n    padding: 40px 0;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n    .header__nav .header-logo__image {\\n      width: 100%; }\\n    .header__nav .nav-menu {\\n      display: flex; }\\n      .header__nav .nav-menu__list {\\n        width: 150px; }\\n        .header__nav .nav-menu__list--white {\\n          background-color: #ffffff;\\n          border-radius: 2rem; }\\n        .header__nav .nav-menu__list__link {\\n          display: block;\\n          color: #ffffff;\\n          margin: 20px 0;\\n          text-align: center;\\n          text-decoration: none; }\\n          .header__nav .nav-menu__list__link--yellow {\\n            margin: 0;\\n            padding: 20px 0;\\n            color: #F4BB19; }\\n  .header .description-wrap {\\n    display: flex; }\\n    .header .description-wrap .catch-copy__title {\\n      font-size: 4rem;\\n      color: #ffffff;\\n      margin-bottom: 1.5rem;\\n      line-height: 1.2em; }\\n    .header .description-wrap .catch-copy__description {\\n      font-size: 1.5rem;\\n      line-height: 1.5em;\\n      color: #ffffff;\\n      margin-bottom: 1.5rem; }\\n      .header .description-wrap .catch-copy__description--pc {\\n        display: none; }\\n      @media screen and (min-width: 768px) {\\n        .header .description-wrap .catch-copy__description .catch-copy__description--pc {\\n          display: block; } }\\n    .header .description-wrap .catch-copy__download {\\n      color: #ffffff;\\n      background-color: #3198CB;\\n      text-decoration: none;\\n      display: inline-block;\\n      padding: 20px 100px;\\n      border-radius: 2rem; }\\n    .header .description-wrap .top-image-wrap {\\n      position: absolute;\\n      right: 0; }\\n      .header .description-wrap .top-image-wrap__image {\\n        width: 100%; }\\n      .header .description-wrap .top-image-wrap:after {\\n        content: '';\\n        display: block; }\\n\\n.footer {\\n  margin: auto;\\n  padding: 20px 0;\\n  background-color: #F4BB19; }\\n  .footer .copyright {\\n    max-width: 1000px; }\\n    .footer .copyright__text {\\n      color: #ffffff;\\n      text-align: center; }\\n      .footer .copyright__text--white {\\n        color: #ffffff;\\n        text-decoration: none; }\\n\\n#about {\\n  padding: 100px 0; }\\n  #about .about {\\n    max-width: 950px;\\n    margin: auto;\\n    text-align: center; }\\n    #about .about__title {\\n      color: #F4BB19;\\n      font-size: 3.125rem;\\n      margin-bottom: 50px; }\\n      #about .about__title--small {\\n        font-size: 2.25rem;\\n        line-height: 3.125rem; }\\n    #about .about__article {\\n      font-size: 1.375rem;\\n      line-height: 2.5rem;\\n      margin-bottom: 50px; }\\n    #about .about .objective {\\n      display: flex; }\\n      #about .about .objective__content {\\n        width: 33.3334%;\\n        margin: 30px; }\\n        #about .about .objective__content .phrase {\\n          position: relative;\\n          color: #ffffff;\\n          background-color: #F4BB19;\\n          padding: 20px 0;\\n          border-radius: 10px;\\n          line-height: 1.875rem; }\\n          #about .about .objective__content .phrase:before {\\n            content: '';\\n            position: absolute;\\n            background-color: #F4BB19;\\n            border-radius: 5px;\\n            left: 20px;\\n            bottom: -30px;\\n            width: 18px;\\n            height: 18px; }\\n          #about .about .objective__content .phrase:after {\\n            content: '';\\n            position: absolute;\\n            background-color: #F4BB19;\\n            border-radius: 5px;\\n            left: 40px;\\n            bottom: -50px;\\n            width: 13px;\\n            height: 13px; }\\n        #about .about .objective__content .image-wrap {\\n          height: 110px;\\n          padding: 30px 0;\\n          vertical-align: middle; }\\n          #about .about .objective__content .image-wrap__image {\\n            height: 100%; }\\n    #about .about__description {\\n      line-height: 2rem; }\\n\\n#use {\\n  background-color: #F4BB19;\\n  padding: 100px 0; }\\n  #use .use {\\n    max-width: 1000px;\\n    margin: auto; }\\n    #use .use__title {\\n      font-size: 3.125rem;\\n      color: #ffffff;\\n      text-align: center;\\n      margin-bottom: 100px; }\\n    #use .use__contents .content {\\n      display: flex;\\n      justify-content: space-between;\\n      align-items: center;\\n      position: relative;\\n      background-color: #ffffff;\\n      border-radius: 10px;\\n      margin: 50px 0;\\n      min-height: 350px; }\\n      #use .use__contents .content__number {\\n        position: absolute;\\n        top: 0;\\n        background-color: #3198CB;\\n        width: 80px;\\n        height: 80px; }\\n        #use .use__contents .content__number .position {\\n          position: absolute;\\n          top: 40%;\\n          font-size: 2rem;\\n          color: #ffffff; }\\n          #use .use__contents .content__number .position--left {\\n            left: 40%;\\n            transform: translate(-40%, -40%); }\\n          #use .use__contents .content__number .position--right {\\n            right: 40%;\\n            transform: translate(40%, -40%); }\\n        #use .use__contents .content__number--left {\\n          left: 0;\\n          border-top-left-radius: 10px;\\n          border-bottom-right-radius: 100%; }\\n        #use .use__contents .content__number--right {\\n          right: 0;\\n          border-top-right-radius: 10px;\\n          border-bottom-left-radius: 100%; }\\n      #use .use__contents .content--order {\\n        flex-direction: row-reverse; }\\n      #use .use__contents .content__description--left {\\n        margin-left: 50px; }\\n      #use .use__contents .content__description--right {\\n        margin-right: 50px; }\\n      #use .use__contents .content__description .title {\\n        color: #F4BB19;\\n        font-size: 2.5rem;\\n        vertical-align: middle; }\\n        #use .use__contents .content__description .title--label {\\n          display: inline-block;\\n          color: #ffffff;\\n          font-size: 1rem;\\n          background-color: #F4BB19;\\n          border-radius: 4px;\\n          margin-left: 10px;\\n          padding: 0 20px;\\n          line-height: 2.5rem;\\n          vertical-align: middle; }\\n      #use .use__contents .content__description .lists {\\n        margin-top: 50px;\\n        margin-left: 20px; }\\n        #use .use__contents .content__description .lists__list {\\n          list-style-type: none;\\n          margin: 20px 0;\\n          color: #707070; }\\n          #use .use__contents .content__description .lists__list:before {\\n            content: \\\"\\\";\\n            width: 10px;\\n            height: 10px;\\n            display: inline-block;\\n            border-radius: 100%;\\n            background-color: #F4BB19;\\n            position: relative;\\n            left: -15px;\\n            top: -3px; }\\n          #use .use__contents .content__description .lists__list--bold {\\n            color: #444444;\\n            font-weight: bold; }\\n    #use .use__contents__image .image {\\n      width: 100%; }\\n\\n#recommend {\\n  padding: 100px 0; }\\n  #recommend .recommend {\\n    max-width: 1000px;\\n    margin: auto; }\\n    #recommend .recommend__title {\\n      font-size: 3.125rem;\\n      color: #F4BB19;\\n      text-align: center;\\n      margin-bottom: 100px; }\\n    #recommend .recommend .contents {\\n      display: flex; }\\n      #recommend .recommend .contents .content {\\n        width: 25%;\\n        margin: 0 20px; }\\n        #recommend .recommend .contents .content .img-wrap {\\n          text-align: center;\\n          margin-bottom: 30px; }\\n        #recommend .recommend .contents .content__title {\\n          font-size: 1.25rem;\\n          text-align: center;\\n          margin-bottom: 20px; }\\n        #recommend .recommend .contents .content__description {\\n          color: #707070; }\\n\\n#function {\\n  padding: 100px 0;\\n  background-color: #F4BB19; }\\n  #function .function {\\n    max-width: 1000px;\\n    margin: auto; }\\n    #function .function__title {\\n      font-size: 3.125rem;\\n      color: #ffffff;\\n      text-align: center;\\n      margin-bottom: 100px; }\\n    #function .function .contents {\\n      display: flex;\\n      flex-wrap: wrap;\\n      max-width: 1000px; }\\n      #function .function .contents .content {\\n        width: 25%;\\n        padding: 0 20px; }\\n        #function .function .contents .content .img-wrap {\\n          display: flex;\\n          align-items: center;\\n          justify-content: center;\\n          background-color: #ffffff;\\n          height: 160px;\\n          border-radius: 10px; }\\n          #function .function .contents .content .img-wrap__image {\\n            max-width: 100%; }\\n        #function .function .contents .content__title {\\n          text-align: center;\\n          color: #ffffff;\\n          font-size: 1.375rem;\\n          margin-top: 20px;\\n          margin-bottom: 50px; }\\n\\n#begin {\\n  padding: 100px 0; }\\n  #begin .begin {\\n    max-width: 1000px;\\n    margin: auto;\\n    display: flex;\\n    justify-content: space-between; }\\n    #begin .begin-text__title {\\n      color: #F4BB19;\\n      font-size: 3.125rem;\\n      margin-bottom: 30px; }\\n    #begin .begin-text__description {\\n      font-size: 1.375rem;\\n      line-height: 2.25rem;\\n      letter-spacing: 1.5px;\\n      color: #707070;\\n      margin-bottom: 30px; }\\n    #begin .begin-text__download {\\n      display: inline-block;\\n      color: #ffffff;\\n      background-color: #3198CB;\\n      text-decoration: none;\\n      padding: 20px 100px;\\n      border-radius: 50px; }\\n    #begin .begin .img-wrap__image {\\n      max-width: 100%; }\\n\\n* {\\n  box-sizing: border-box; }\\n\\nbody {\\n  font-family: 'Noto Sans JP', sans-serif;\\n  font-size: 16px;\\n  color: #444444; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });