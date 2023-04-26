/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img/fb-background.jpg */ \"./src/img/fb-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ---- General Styling ---- */\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Roboto Slab', serif;\\n}\\n\\nli {\\n  background-color: #fff;\\n}\\n\\n.grey {\\n  background-color: rgb(205, 240, 255);\\n}\\n\\nbutton,\\ninput[type='button'] {\\n  font-size: 1.2em;\\n  padding: 5px;\\n  background-color: #fff;\\n  border: 1px solid green;\\n  border-radius: 3px;\\n  color: green;\\n  cursor: pointer;\\n}\\n\\n@media (hover: hover) {\\n  button:hover,\\n  input[type='button']:hover {\\n    color: #fff;\\n    background-color: green;\\n  }\\n}\\n\\n/* ---- Heading Styling ---- */\\n\\ndiv.background {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  height: 100vh;\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n\\ndiv.background-blur {\\n  backdrop-filter: blur(10px);\\n  height: 100%;\\n}\\n\\ndiv.header-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nh1.title {\\n  display: flex;\\n  color: #367f33;\\n  margin-top: 30px;\\n}\\n\\n/* ---- Leaderboard Styling ---- */\\n\\ndiv.board {\\n  display: flex;\\n  justify-content: center;\\n  gap: 50px;\\n  width: 100%;\\n}\\n\\nsection.recent-score {\\n  display: flex;\\n  gap: 8px;\\n  margin-top: 20px;\\n  flex-direction: column;\\n}\\n\\ndiv.score-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 8px;\\n}\\n\\nh2.score-list-title {\\n  font-size: 1.7em;\\n  color: rgb(0, 145, 255);\\n  margin-right: 30px;\\n}\\n\\nul.score-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  border: 1px solid #000;\\n  border-radius: 5px;\\n  overflow: hidden;\\n  font-size: 1.2em;\\n}\\n\\nli.score-item {\\n  padding: 5px;\\n}\\n\\nsection.add-score {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  margin-top: 20px;\\n}\\n\\nh2.add-score-title {\\n  color: rgb(0, 145, 255);\\n  font-size: 1.7em;\\n}\\n\\n.score-input {\\n  font-size: 1.2em;\\n}\\n\\n.error {\\n  max-height: 0;\\n  padding: 0;\\n  border-radius: 3px;\\n  background-color: rgb(169, 25, 25);\\n  color: #fff;\\n  opacity: 0;\\n  transition-property: max-height, opacity, padding;\\n  transition-duration: 0.5s;\\n  transition-timing-function: ease-in-out;\\n}\\n\\n.error.show {\\n  opacity: 100%;\\n  max-height: 2em;\\n  padding: 3px;\\n}\\n\\ninput#submit-score {\\n  align-self: flex-end;\\n  font-size: 1em;\\n}\\n\\n/* ---- Mobile view ---- */\\n\\n@media screen and (max-width: 500px) {\\n  div.board {\\n    flex-direction: column;\\n    padding: 0 30px;\\n  }\\n\\n  h1.title {\\n    display: flex;\\n    margin: 0;\\n    padding: 50px 30px;\\n    min-width: 0;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_load_scores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load-scores.js */ \"./src/modules/load-scores.js\");\n/* harmony import */ var _modules_score_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/score-list.js */ \"./src/modules/score-list.js\");\n/* harmony import */ var _modules_setup_listeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/setup-listeners.js */ \"./src/modules/setup-listeners.js\");\n/* harmony import */ var _modules_mock_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mock-list.js */ \"./src/modules/mock-list.js\");\n/* harmony import */ var _modules_init_game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/init-game.js */ \"./src/modules/init-game.js\");\n/* harmony import */ var _modules_get_scores_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/get-scores.js */ \"./src/modules/get-scores.js\");\n\n\n\n\n\n\n\n\nconst scoreList = new _modules_score_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nlet storage = JSON.parse(localStorage.getItem('scores'));\n\n(0,_modules_init_game_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\nconst fetchScores = async () => {\n  const response = await (0,_modules_get_scores_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  scoreList.list = [];\n  response.forEach((score) => {\n    scoreList.addScore(score.user, score.score);\n  });\n  storage = scoreList.list;\n  localStorage.setItem('scores', JSON.stringify(scoreList.list));\n};\n\nfetchScores().then(() => {\n  if (!storage || storage.length === 0) {\n    scoreList.list = (0,_modules_mock_list_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  } else {\n    scoreList.list = storage;\n  }\n  (0,_modules_load_scores_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scoreList);\n  (0,_modules_setup_listeners_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(scoreList);\n});\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-score.js":
/*!**********************************!*\
  !*** ./src/modules/add-score.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _init_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-game.js */ \"./src/modules/init-game.js\");\n\n\nconst addScore = async (name, score) => {\n  const data = JSON.stringify({\n    user: name,\n    score: Number(score),\n  });\n\n  const id = await (0,_init_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';\n\n  const addScoreUrl = `${baseUrl}/${id}/scores/`;\n  fetch(addScoreUrl, {\n    method: 'POST',\n    mode: 'cors',\n    body: data,\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://leaderboard/./src/modules/add-score.js?");

/***/ }),

/***/ "./src/modules/add-to-list.js":
/*!************************************!*\
  !*** ./src/modules/add-to-list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _load_scores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-scores.js */ \"./src/modules/load-scores.js\");\n/* harmony import */ var _add_score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-score.js */ \"./src/modules/add-score.js\");\n\n\n\nconst addToList = (name, score, scoreList) => {\n  if (!JSON.parse(localStorage.getItem('scores'))\n    || JSON.parse(localStorage.getItem('scores')).length === 0) {\n    scoreList.list = [];\n  }\n  (0,_add_score_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name, score);\n  scoreList.addScore(name, score);\n  (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scoreList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToList);\n\n//# sourceURL=webpack://leaderboard/./src/modules/add-to-list.js?");

/***/ }),

/***/ "./src/modules/get-scores.js":
/*!***********************************!*\
  !*** ./src/modules/get-scores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _init_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-game.js */ \"./src/modules/init-game.js\");\n\n\nconst getScores = async () => {\n  const id = await (0,_init_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';\n\n  const addScoreUrl = `${baseUrl}/${id}/scores/`;\n  const retVal = await fetch(addScoreUrl);\n  const json = await retVal.json();\n  return json.result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScores);\n\n//# sourceURL=webpack://leaderboard/./src/modules/get-scores.js?");

/***/ }),

/***/ "./src/modules/init-game.js":
/*!**********************************!*\
  !*** ./src/modules/init-game.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function createGame() {\n  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n  const data = JSON.stringify({\n    name: 'Football8999',\n  });\n  const retVal = await fetch(baseUrl, {\n    method: 'POST',\n    mode: 'cors',\n    body: data,\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const response = await retVal.json();\n  const id = response.result.split(' ')[3];\n  return id;\n}\n\nconst initGame = async () => {\n  let id;\n  if (!localStorage.getItem('id')) {\n    id = await createGame().then((id) => {\n      localStorage.setItem('id', id);\n    });\n  } else {\n    id = localStorage.getItem('id');\n  }\n  return id;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGame);\n\n//# sourceURL=webpack://leaderboard/./src/modules/init-game.js?");

/***/ }),

/***/ "./src/modules/load-scores.js":
/*!************************************!*\
  !*** ./src/modules/load-scores.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadScores = (scoreList) => {\n  const scoreEl = document.querySelector('.score-list');\n  scoreEl.textContent = '';\n  scoreList.list.forEach((score) => {\n    const li = document.createElement('li');\n    li.classList.add('score-item');\n    if (score.index % 2 === 1) {\n      li.classList.add('grey');\n    }\n    li.textContent = `${score.name}: ${score.score}`;\n    scoreEl.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadScores);\n\n//# sourceURL=webpack://leaderboard/./src/modules/load-scores.js?");

/***/ }),

/***/ "./src/modules/mock-list.js":
/*!**********************************!*\
  !*** ./src/modules/mock-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMock = () => {\n  const list = [\n    {\n      name: 'name 1',\n      score: 200,\n      index: 1,\n    },\n    {\n      name: 'name 2',\n      score: 70,\n      index: 2,\n    },\n    {\n      name: 'name 3',\n      score: 50,\n      index: 3,\n    },\n    {\n      name: 'name 4',\n      score: 300,\n      index: 4,\n    },\n  ];\n  return list;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMock);\n\n//# sourceURL=webpack://leaderboard/./src/modules/mock-list.js?");

/***/ }),

/***/ "./src/modules/score-list.js":
/*!***********************************!*\
  !*** ./src/modules/score-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScoreList)\n/* harmony export */ });\nclass ScoreList {\n  constructor() {\n    this.list = [];\n  }\n\n  addScore(name, score, index = this.list.length + 1) {\n    const scoreOb = {\n      name,\n      score,\n      index,\n    };\n    this.list.push(scoreOb);\n    localStorage.setItem('scores', JSON.stringify(this.list));\n  }\n}\n\n//# sourceURL=webpack://leaderboard/./src/modules/score-list.js?");

/***/ }),

/***/ "./src/modules/setup-listeners.js":
/*!****************************************!*\
  !*** ./src/modules/setup-listeners.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_to_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-list.js */ \"./src/modules/add-to-list.js\");\n/* harmony import */ var _get_scores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-scores.js */ \"./src/modules/get-scores.js\");\n/* harmony import */ var _init_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-game.js */ \"./src/modules/init-game.js\");\n/* harmony import */ var _load_scores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-scores.js */ \"./src/modules/load-scores.js\");\n/* harmony import */ var _mock_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-list.js */ \"./src/modules/mock-list.js\");\n/* harmony import */ var _score_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score-list.js */ \"./src/modules/score-list.js\");\n\n\n\n\n\n\n\nconst setupListeners = (scoreList) => {\n  const nameInput = document.querySelector('.score-name-input');\n  const scoreInput = document.querySelector('.score-number-input');\n  const submit = document.querySelector('#submit-score');\n  const error = document.querySelector('.error');\n  const refresh = document.querySelector('.refresh');\n\n  submit.addEventListener('click', () => {\n    const nameReg = new RegExp(/^[A-Za-z]{1}[A-Za-z0-9]*/g);\n    const numReg = new RegExp(/^[1-9]{1}[0-9]*/g);\n    if (nameReg.test(nameInput.value) && numReg.test(scoreInput.value)) {\n      (0,_add_to_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nameInput.value, scoreInput.value, scoreList);\n      nameInput.value = '';\n      scoreInput.value = '';\n      nameInput.focus();\n    } else {\n      error.classList.toggle('show');\n      setTimeout(() => {\n        error.classList.toggle('show');\n        nameInput.focus();\n      }, 3000);\n    }\n  });\n\n  scoreInput.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      const nameReg = new RegExp(/^[A-Za-z]{1}[A-Za-z0-9]*/g);\n      const numReg = new RegExp(/^[1-9]{1}[0-9]*/g);\n      if (nameReg.test(nameInput.value) && numReg.test(scoreInput.value)) {\n        (0,_add_to_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nameInput.value, scoreInput.value, scoreList);\n        nameInput.value = '';\n        scoreInput.value = '';\n        nameInput.focus();\n      } else {\n        error.classList.toggle('show');\n        setTimeout(() => {\n          error.classList.toggle('show');\n          nameInput.focus();\n        }, 3000);\n      }\n    }\n  });\n\n  refresh.addEventListener('click', () => {\n    const reload = async () => {\n      (0,_init_game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new _score_list_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n      const response = await (0,_get_scores_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      if (response.length !== 0) {\n        scoreList.list = [];\n        response.forEach((score) => {\n          scoreList.addScore(score.user, score.score);\n        });\n        localStorage.setItem('scores', JSON.stringify(scoreList.list));\n      } else {\n        scoreList.list = (0,_mock_list_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        localStorage.setItem('scores', JSON.stringify(response));\n      }\n      (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(scoreList);\n    };\n    reload();\n  });\n\n  refresh.addEventListener('touchstart', (e) => {\n    const reload = async () => {\n      (0,_init_game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new _score_list_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n      const response = await (0,_get_scores_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      if (response.length !== 0) {\n        scoreList.list = [];\n        response.forEach((score) => {\n          scoreList.addScore(score.user, score.score);\n        });\n        localStorage.setItem('scores', JSON.stringify(scoreList.list));\n      } else {\n        scoreList.list = (0,_mock_list_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        localStorage.setItem('scores', JSON.stringify(response));\n      }\n      (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(scoreList);\n    };\n    reload();\n    const btn = document.querySelector('.refresh');\n    console.log(btn.style);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupListeners);\n\n//# sourceURL=webpack://leaderboard/./src/modules/setup-listeners.js?");

/***/ }),

/***/ "./src/img/fb-background.jpg":
/*!***********************************!*\
  !*** ./src/img/fb-background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad14bd87bcc2a8953ef0.jpg\";\n\n//# sourceURL=webpack://leaderboard/./src/img/fb-background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;