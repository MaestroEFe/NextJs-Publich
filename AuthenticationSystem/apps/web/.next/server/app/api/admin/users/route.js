"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/users/route";
exports.ids = ["app/api/admin/users/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_efe_Documents_NextJs_NextJs_Public_AuthenticationSystem_apps_web_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/users/route.ts */ \"(rsc)/./app/api/admin/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/users/route\",\n        pathname: \"/api/admin/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/users/route\"\n    },\n    resolvedPagePath: \"/home/efe/Documents/NextJs/NextJs-Public/AuthenticationSystem/apps/web/app/api/admin/users/route.ts\",\n    nextConfigOutput,\n    userland: _home_efe_Documents_NextJs_NextJs_Public_AuthenticationSystem_apps_web_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/users/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMi4zMF9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGZWZlJTJGRG9jdW1lbnRzJTJGTmV4dEpzJTJGTmV4dEpzLVB1YmxpYyUyRkF1dGhlbnRpY2F0aW9uU3lzdGVtJTJGYXBwcyUyRndlYiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmVmZSUyRkRvY3VtZW50cyUyRk5leHRKcyUyRk5leHRKcy1QdWJsaWMlMkZBdXRoZW50aWNhdGlvblN5c3RlbSUyRmFwcHMlMkZ3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWF1dGgtc3lzdGVtLz83MDIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2VmZS9Eb2N1bWVudHMvTmV4dEpzL05leHRKcy1QdWJsaWMvQXV0aGVudGljYXRpb25TeXN0ZW0vYXBwcy93ZWIvYXBwL2FwaS9hZG1pbi91c2Vycy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9lZmUvRG9jdW1lbnRzL05leHRKcy9OZXh0SnMtUHVibGljL0F1dGhlbnRpY2F0aW9uU3lzdGVtL2FwcHMvd2ViL2FwcC9hcGkvYWRtaW4vdXNlcnMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkbWluL3VzZXJzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/users/route.ts":
/*!**************************************!*\
  !*** ./app/api/admin/users/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/../../node_modules/.pnpm/next-auth@4.24.5_next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _repo_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @repo/auth */ \"(rsc)/../../packages/auth/src/index.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!(0,_repo_auth__WEBPACK_IMPORTED_MODULE_2__.isAdmin)(session)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            message: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const users = await _repo_auth__WEBPACK_IMPORTED_MODULE_2__.User.find({}).select(\"name email role\");\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(users);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            message: \"Something went wrong!\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3VzZXJzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDVDtBQUNBO0FBRXBDLGVBQWVNO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTVAsZ0VBQWdCQSxDQUFDQyxrREFBV0E7SUFFbEQsSUFBSSxDQUFDRyxtREFBT0EsQ0FBQ0csVUFBVTtRQUNyQixPQUFPRixxREFBWUEsQ0FBQ0csSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBWSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRTtJQUVBLElBQUk7UUFDRixNQUFNUixvREFBU0E7UUFDZixNQUFNUyxRQUFRLE1BQU1SLDRDQUFJQSxDQUFDUyxJQUFJLENBQUMsQ0FBQyxHQUFHQyxNQUFNLENBQUM7UUFDekMsT0FBT1IscURBQVlBLENBQUNHLElBQUksQ0FBQ0c7SUFDM0IsRUFBRSxPQUFPRyxPQUFPO1FBQ2QsT0FBT1QscURBQVlBLENBQUNHLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1zeXN0ZW0vLi9hcHAvYXBpL2FkbWluL3VzZXJzL3JvdXRlLnRzP2EyM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMsIGNvbm5lY3REQiB9IGZyb20gJ0AvbGliL2F1dGgnO1xuaW1wb3J0IHsgVXNlciwgaXNBZG1pbiB9IGZyb20gJ0ByZXBvL2F1dGgnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICBpZiAoIWlzQWRtaW4oc2Vzc2lvbikpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkZvcmJpZGRlblwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKHt9KS5zZWxlY3QoXCJuYW1lIGVtYWlsIHJvbGVcIik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXJzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJjb25uZWN0REIiLCJVc2VyIiwiaXNBZG1pbiIsIk5leHRSZXNwb25zZSIsIkdFVCIsInNlc3Npb24iLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsInVzZXJzIiwiZmluZCIsInNlbGVjdCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   connectDB: () => (/* binding */ connectDB),\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var _repo_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/auth */ \"(rsc)/../../packages/auth/src/index.ts\");\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;\nconst RESEND_API_KEY = process.env.RESEND_API_KEY;\nconst EMAIL_FROM = process.env.EMAIL_FROM || \"onboarding@resend.dev\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nif (!NEXTAUTH_SECRET) {\n    throw new Error(\"Please define the NEXTAUTH_SECRET environment variable inside .env.local\");\n}\nif (!RESEND_API_KEY) {\n    throw new Error(\"Please define the RESEND_API_KEY environment variable inside .env.local\");\n}\n// Export configured auth options\nconst authOptions = (0,_repo_auth__WEBPACK_IMPORTED_MODULE_0__.createAuthOptions)(MONGODB_URI, NEXTAUTH_SECRET);\n// Export configured email sender\nconst { sendEmail } = (0,_repo_auth__WEBPACK_IMPORTED_MODULE_0__.createEmailSender)(RESEND_API_KEY, EMAIL_FROM);\n// Export configured database connector\nconst connectDB = ()=>(0,_repo_auth__WEBPACK_IMPORTED_MODULE_0__.connectDB)(MONGODB_URI);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThGO0FBRTlGLE1BQU1JLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUMzQyxNQUFNRyxrQkFBa0JGLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNuRCxNQUFNQyxpQkFBaUJILFFBQVFDLEdBQUcsQ0FBQ0UsY0FBYztBQUNqRCxNQUFNQyxhQUFhSixRQUFRQyxHQUFHLENBQUNHLFVBQVUsSUFBSTtBQUU3QyxJQUFJLENBQUNMLGFBQWE7SUFDaEIsTUFBTSxJQUFJTSxNQUFNO0FBQ2xCO0FBRUEsSUFBSSxDQUFDSCxpQkFBaUI7SUFDcEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsSUFBSSxDQUFDRixnQkFBZ0I7SUFDbkIsTUFBTSxJQUFJRSxNQUFNO0FBQ2xCO0FBRUEsaUNBQWlDO0FBQzFCLE1BQU1DLGNBQWNYLDZEQUFpQkEsQ0FBQ0ksYUFBYUcsaUJBQWlCO0FBRTNFLGlDQUFpQztBQUMxQixNQUFNLEVBQUVLLFNBQVMsRUFBRSxHQUFHWCw2REFBaUJBLENBQUNPLGdCQUFnQkMsWUFBWTtBQUUzRSx1Q0FBdUM7QUFDaEMsTUFBTVAsWUFBWSxJQUFNQyxxREFBYUEsQ0FBQ0MsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLXN5c3RlbS8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXV0aE9wdGlvbnMsIGNyZWF0ZUVtYWlsU2VuZGVyLCBjb25uZWN0REIgYXMgY29ubmVjdEF1dGhEQiB9IGZyb20gJ0ByZXBvL2F1dGgnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3QgTkVYVEFVVEhfU0VDUkVUID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUO1xuY29uc3QgUkVTRU5EX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWTtcbmNvbnN0IEVNQUlMX0ZST00gPSBwcm9jZXNzLmVudi5FTUFJTF9GUk9NIHx8ICdvbmJvYXJkaW5nQHJlc2VuZC5kZXYnO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnKTtcbn1cblxuaWYgKCFORVhUQVVUSF9TRUNSRVQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBORVhUQVVUSF9TRUNSRVQgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnKTtcbn1cblxuaWYgKCFSRVNFTkRfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIFJFU0VORF9BUElfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJyk7XG59XG5cbi8vIEV4cG9ydCBjb25maWd1cmVkIGF1dGggb3B0aW9uc1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0gY3JlYXRlQXV0aE9wdGlvbnMoTU9OR09EQl9VUkksIE5FWFRBVVRIX1NFQ1JFVCk7XG5cbi8vIEV4cG9ydCBjb25maWd1cmVkIGVtYWlsIHNlbmRlclxuZXhwb3J0IGNvbnN0IHsgc2VuZEVtYWlsIH0gPSBjcmVhdGVFbWFpbFNlbmRlcihSRVNFTkRfQVBJX0tFWSwgRU1BSUxfRlJPTSk7XG5cbi8vIEV4cG9ydCBjb25maWd1cmVkIGRhdGFiYXNlIGNvbm5lY3RvclxuZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9ICgpID0+IGNvbm5lY3RBdXRoREIoTU9OR09EQl9VUkkpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUF1dGhPcHRpb25zIiwiY3JlYXRlRW1haWxTZW5kZXIiLCJjb25uZWN0REIiLCJjb25uZWN0QXV0aERCIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiUkVTRU5EX0FQSV9LRVkiLCJFTUFJTF9GUk9NIiwiRXJyb3IiLCJhdXRoT3B0aW9ucyIsInNlbmRFbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/index.ts":
/*!****************************************!*\
  !*** ../../packages/auth/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* reexport safe */ _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   connectDB: () => (/* reexport safe */ _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__.connectDB),\n/* harmony export */   createAuthOptions: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_2__.createAuthOptions),\n/* harmony export */   createEmailSender: () => (/* reexport safe */ _lib_email__WEBPACK_IMPORTED_MODULE_1__.createEmailSender),\n/* harmony export */   isAdmin: () => (/* reexport safe */ _lib_access_control__WEBPACK_IMPORTED_MODULE_3__.isAdmin)\n/* harmony export */ });\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/connectDB */ \"(rsc)/../../packages/auth/src/lib/connectDB.ts\");\n/* harmony import */ var _lib_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/email */ \"(rsc)/../../packages/auth/src/lib/email.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/auth */ \"(rsc)/../../packages/auth/src/lib/auth.ts\");\n/* harmony import */ var _lib_access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/access-control */ \"(rsc)/../../packages/auth/src/lib/access-control.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/User */ \"(rsc)/../../packages/auth/src/models/User.ts\");\n/* harmony import */ var _models_PasswordResetToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/PasswordResetToken */ \"(rsc)/../../packages/auth/src/models/PasswordResetToken.ts\");\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUNEO0FBQ1U7QUFDdUI7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1zeXN0ZW0vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvaW5kZXgudHM/YmZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xpYi9jb25uZWN0REInO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZW1haWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvYXV0aCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9hY2Nlc3MtY29udHJvbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIsIHR5cGUgSVVzZXIgfSBmcm9tICcuL21vZGVscy9Vc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWxzL1Bhc3N3b3JkUmVzZXRUb2tlbic7XG5cbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/index.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/lib/access-control.ts":
/*!*****************************************************!*\
  !*** ../../packages/auth/src/lib/access-control.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\nconst isAdmin = (session)=>{\n    return session?.user?.group === \"admin\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2FjY2Vzcy1jb250cm9sLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxVQUFVLENBQUNDO0lBQ3RCLE9BQU9BLFNBQVNDLE1BQU1DLFVBQVU7QUFDbEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLXN5c3RlbS8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYWNjZXNzLWNvbnRyb2wudHM/OGE2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgaXNBZG1pbiA9IChzZXNzaW9uOiBTZXNzaW9uIHwgbnVsbCkgPT4ge1xuICByZXR1cm4gc2Vzc2lvbj8udXNlcj8uZ3JvdXAgPT09ICdhZG1pbic7XG59O1xuIl0sIm5hbWVzIjpbImlzQWRtaW4iLCJzZXNzaW9uIiwidXNlciIsImdyb3VwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/lib/access-control.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/lib/auth.ts":
/*!*******************************************!*\
  !*** ../../packages/auth/src/lib/auth.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAuthOptions: () => (/* binding */ createAuthOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/.pnpm/next-auth@4.24.5_next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _connectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connectDB */ \"(rsc)/../../packages/auth/src/lib/connectDB.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"(rsc)/../../packages/auth/src/models/User.ts\");\n\n\n\nconst createAuthOptions = (mongodbUri, nextAuthSecret)=>({\n        providers: [\n            (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                name: \"Credentials\",\n                credentials: {\n                    email: {\n                        label: \"Email\",\n                        type: \"email\"\n                    },\n                    password: {\n                        label: \"Password\",\n                        type: \"password\"\n                    }\n                },\n                async authorize (credentials) {\n                    await (0,_connectDB__WEBPACK_IMPORTED_MODULE_1__.connectDB)(mongodbUri);\n                    if (!credentials?.email || !credentials?.password) {\n                        return null;\n                    }\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                        email: credentials.email\n                    }).select(\"+password\");\n                    if (!user) {\n                        return null;\n                    }\n                    const isPasswordMatch = await user.comparePassword(credentials.password);\n                    if (!isPasswordMatch) {\n                        return null;\n                    }\n                    return {\n                        id: user._id.toString(),\n                        name: user.name,\n                        email: user.email,\n                        group: user.group\n                    };\n                }\n            })\n        ],\n        session: {\n            strategy: \"jwt\"\n        },\n        callbacks: {\n            async jwt ({ token, user }) {\n                if (user) {\n                    token.id = user.id;\n                    token.group = user.group;\n                }\n                return token;\n            },\n            async session ({ session, token }) {\n                if (session.user) {\n                    session.user.id = token.id;\n                    session.user.group = token.group;\n                }\n                return session;\n            }\n        },\n        pages: {\n            signIn: \"/login\"\n        },\n        secret: nextAuthSecret\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNrRTtBQUMxQjtBQUNOO0FBRTNCLE1BQU1HLG9CQUFvQixDQUMvQkMsWUFDQUMsaUJBQ3FCO1FBQ3JCQyxXQUFXO1lBQ1ROLDJFQUFtQkEsQ0FBQztnQkFDbEJPLE1BQU07Z0JBQ05DLGFBQWE7b0JBQ1hDLE9BQU87d0JBQUVDLE9BQU87d0JBQVNDLE1BQU07b0JBQVE7b0JBQ3ZDQyxVQUFVO3dCQUFFRixPQUFPO3dCQUFZQyxNQUFNO29CQUFXO2dCQUNsRDtnQkFDQSxNQUFNRSxXQUFVTCxXQUFXO29CQUN6QixNQUFNUCxxREFBU0EsQ0FBQ0c7b0JBRWhCLElBQUksQ0FBQ0ksYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO3dCQUNqRCxPQUFPO29CQUNUO29CQUVBLE1BQU1FLE9BQU8sTUFBTVosb0RBQUlBLENBQUNhLE9BQU8sQ0FBQzt3QkFBRU4sT0FBT0QsWUFBWUMsS0FBSztvQkFBQyxHQUFHTyxNQUFNLENBQ2xFO29CQUdGLElBQUksQ0FBQ0YsTUFBTTt3QkFDVCxPQUFPO29CQUNUO29CQUVBLE1BQU1HLGtCQUFrQixNQUFNSCxLQUFLSSxlQUFlLENBQ2hEVixZQUFZSSxRQUFRO29CQUd0QixJQUFJLENBQUNLLGlCQUFpQjt3QkFDcEIsT0FBTztvQkFDVDtvQkFFQSxPQUFPO3dCQUNMRSxJQUFJTCxLQUFLTSxHQUFHLENBQUNDLFFBQVE7d0JBQ3JCZCxNQUFNTyxLQUFLUCxJQUFJO3dCQUNmRSxPQUFPSyxLQUFLTCxLQUFLO3dCQUNqQmEsT0FBT1IsS0FBS1EsS0FBSztvQkFDbkI7Z0JBQ0Y7WUFDRjtTQUNEO1FBQ0RDLFNBQVM7WUFDUEMsVUFBVTtRQUNaO1FBQ0FDLFdBQVc7WUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWIsSUFBSSxFQUFFO2dCQUN2QixJQUFJQSxNQUFNO29CQUNSYSxNQUFNUixFQUFFLEdBQUdMLEtBQUtLLEVBQUU7b0JBQ2xCUSxNQUFNTCxLQUFLLEdBQUdSLEtBQUtRLEtBQUs7Z0JBQzFCO2dCQUNBLE9BQU9LO1lBQ1Q7WUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFFO2dCQUM5QixJQUFJSixRQUFRVCxJQUFJLEVBQUU7b0JBQ2hCUyxRQUFRVCxJQUFJLENBQUNLLEVBQUUsR0FBR1EsTUFBTVIsRUFBRTtvQkFDMUJJLFFBQVFULElBQUksQ0FBQ1EsS0FBSyxHQUFHSyxNQUFNTCxLQUFLO2dCQUNsQztnQkFDQSxPQUFPQztZQUNUO1FBQ0Y7UUFDQUssT0FBTztZQUNMQyxRQUFRO1FBQ1Y7UUFDQUMsUUFBUXpCO0lBQ1YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLXN5c3RlbS8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC50cz9jMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJy4vY29ubmVjdERCJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUF1dGhPcHRpb25zID0gKFxuICBtb25nb2RiVXJpOiBzdHJpbmcsXG4gIG5leHRBdXRoU2VjcmV0OiBzdHJpbmdcbik6IE5leHRBdXRoT3B0aW9ucyA9PiAoe1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBhd2FpdCBjb25uZWN0REIobW9uZ29kYlVyaSk7XG5cbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KS5zZWxlY3QoXG4gICAgICAgICAgJytwYXNzd29yZCdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRNYXRjaCA9IGF3YWl0IHVzZXIuY29tcGFyZVBhc3N3b3JkKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIGdyb3VwOiB1c2VyLmdyb3VwLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5ncm91cCA9IHVzZXIuZ3JvdXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZCBhcyBzdHJpbmc7XG4gICAgICAgIHNlc3Npb24udXNlci5ncm91cCA9IHRva2VuLmdyb3VwIGFzIHN0cmluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgfSxcbiAgc2VjcmV0OiBuZXh0QXV0aFNlY3JldCxcbn0pO1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb25uZWN0REIiLCJVc2VyIiwiY3JlYXRlQXV0aE9wdGlvbnMiLCJtb25nb2RiVXJpIiwibmV4dEF1dGhTZWNyZXQiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJzZWxlY3QiLCJpc1Bhc3N3b3JkTWF0Y2giLCJjb21wYXJlUGFzc3dvcmQiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiZ3JvdXAiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInBhZ2VzIiwic2lnbkluIiwic2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/lib/connectDB.ts":
/*!************************************************!*\
  !*** ../../packages/auth/src/lib/connectDB.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async (mongodbUri)=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        return true;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongodbUri);\n        console.log(\"MongoDB connected successfully.\");\n        return true;\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        return false;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2Nvbm5lY3REQi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsWUFBWSxPQUFPQztJQUM5QixJQUFJRiw2REFBb0IsQ0FBQyxFQUFFLENBQUNJLFVBQVUsRUFBRTtRQUN0QyxPQUFPO0lBQ1Q7SUFFQSxJQUFJO1FBQ0YsTUFBTUosdURBQWdCLENBQUNFO1FBQ3ZCSSxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU87SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1zeXN0ZW0vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2Nvbm5lY3REQi50cz9kYzZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYyAobW9uZ29kYlVyaTogc3RyaW5nKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QobW9uZ29kYlVyaSk7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsIm1vbmdvZGJVcmkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/lib/connectDB.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/lib/email.ts":
/*!********************************************!*\
  !*** ../../packages/auth/src/lib/email.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEmailSender: () => (/* binding */ createEmailSender)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/../../node_modules/.pnpm/resend@4.6.0_react-dom@18.2.0_react@18.2.0/node_modules/resend/dist/index.mjs\");\n\nconst createEmailSender = (apiKey, defaultFrom)=>{\n    const resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(apiKey);\n    const sendEmail = async (options)=>{\n        try {\n            const fromAddress = options.from || defaultFrom;\n            const { data, error } = await resend.emails.send({\n                from: fromAddress,\n                to: options.to,\n                subject: options.subject,\n                html: options.html\n            });\n            if (error) {\n                console.error(\"Error sending email:\", error);\n                return {\n                    success: false,\n                    error\n                };\n            }\n            if (!data) {\n                const unknownError = new Error(\"Email sending failed without an explicit error.\");\n                console.error(unknownError);\n                return {\n                    success: false,\n                    error: unknownError\n                };\n            }\n            console.log(\"Email sent successfully:\", data.id);\n            return {\n                success: true,\n                data\n            };\n        } catch (exception) {\n            console.error(\"An unexpected error occurred in sendEmail:\", exception);\n            return {\n                success: false,\n                error: exception\n            };\n        }\n    };\n    return {\n        sendEmail\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2VtYWlsLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBU3pCLE1BQU1DLG9CQUFvQixDQUFDQyxRQUFnQkM7SUFDaEQsTUFBTUMsU0FBUyxJQUFJSiwwQ0FBTUEsQ0FBQ0U7SUFFMUIsTUFBTUcsWUFBWSxPQUFPQztRQUN2QixJQUFJO1lBQ0YsTUFBTUMsY0FBY0QsUUFBUUUsSUFBSSxJQUFJTDtZQUVwQyxNQUFNLEVBQUVNLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTU4sT0FBT08sTUFBTSxDQUFDQyxJQUFJLENBQUM7Z0JBQy9DSixNQUFNRDtnQkFDTk0sSUFBSVAsUUFBUU8sRUFBRTtnQkFDZEMsU0FBU1IsUUFBUVEsT0FBTztnQkFDeEJDLE1BQU1ULFFBQVFTLElBQUk7WUFDcEI7WUFFQSxJQUFJTCxPQUFPO2dCQUNUTSxRQUFRTixLQUFLLENBQUMsd0JBQXdCQTtnQkFDdEMsT0FBTztvQkFBRU8sU0FBUztvQkFBT1A7Z0JBQU07WUFDakM7WUFFQSxJQUFJLENBQUNELE1BQU07Z0JBQ1QsTUFBTVMsZUFBZSxJQUFJQyxNQUFNO2dCQUMvQkgsUUFBUU4sS0FBSyxDQUFDUTtnQkFDZCxPQUFPO29CQUFFRCxTQUFTO29CQUFPUCxPQUFPUTtnQkFBYTtZQUMvQztZQUVBRixRQUFRSSxHQUFHLENBQUMsNEJBQTRCWCxLQUFLWSxFQUFFO1lBQy9DLE9BQU87Z0JBQUVKLFNBQVM7Z0JBQU1SO1lBQUs7UUFDL0IsRUFBRSxPQUFPYSxXQUFXO1lBQ2xCTixRQUFRTixLQUFLLENBQUMsOENBQThDWTtZQUM1RCxPQUFPO2dCQUFFTCxTQUFTO2dCQUFPUCxPQUFPWTtZQUFVO1FBQzVDO0lBQ0Y7SUFFQSxPQUFPO1FBQUVqQjtJQUFVO0FBQ3JCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1zeXN0ZW0vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2VtYWlsLnRzPzk0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcblxuaW50ZXJmYWNlIEVtYWlsT3B0aW9ucyB7XG4gIHRvOiBzdHJpbmc7XG4gIHN1YmplY3Q6IHN0cmluZztcbiAgaHRtbDogc3RyaW5nO1xuICBmcm9tPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRW1haWxTZW5kZXIgPSAoYXBpS2V5OiBzdHJpbmcsIGRlZmF1bHRGcm9tOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChhcGlLZXkpO1xuXG4gIGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChvcHRpb25zOiBFbWFpbE9wdGlvbnMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZnJvbUFkZHJlc3MgPSBvcHRpb25zLmZyb20gfHwgZGVmYXVsdEZyb207XG5cbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICAgIGZyb206IGZyb21BZGRyZXNzLFxuICAgICAgICB0bzogb3B0aW9ucy50byxcbiAgICAgICAgc3ViamVjdDogb3B0aW9ucy5zdWJqZWN0LFxuICAgICAgICBodG1sOiBvcHRpb25zLmh0bWwsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZW1haWw6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnN0IHVua25vd25FcnJvciA9IG5ldyBFcnJvcignRW1haWwgc2VuZGluZyBmYWlsZWQgd2l0aG91dCBhbiBleHBsaWNpdCBlcnJvci4nKTtcbiAgICAgICAgY29uc29sZS5lcnJvcih1bmtub3duRXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVua25vd25FcnJvciB9O1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnRW1haWwgc2VudCBzdWNjZXNzZnVsbHk6JywgZGF0YS5pZCk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIGluIHNlbmRFbWFpbDonLCBleGNlcHRpb24pO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBleGNlcHRpb24gfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2VuZEVtYWlsIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlc2VuZCIsImNyZWF0ZUVtYWlsU2VuZGVyIiwiYXBpS2V5IiwiZGVmYXVsdEZyb20iLCJyZXNlbmQiLCJzZW5kRW1haWwiLCJvcHRpb25zIiwiZnJvbUFkZHJlc3MiLCJmcm9tIiwiZGF0YSIsImVycm9yIiwiZW1haWxzIiwic2VuZCIsInRvIiwic3ViamVjdCIsImh0bWwiLCJjb25zb2xlIiwic3VjY2VzcyIsInVua25vd25FcnJvciIsIkVycm9yIiwibG9nIiwiaWQiLCJleGNlcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/lib/email.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/models/PasswordResetToken.ts":
/*!************************************************************!*\
  !*** ../../packages/auth/src/models/PasswordResetToken.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PasswordResetTokenSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    token: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    expiresAt: {\n        type: Date,\n        required: true,\n        expires: \"1h\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).PasswordResetToken || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"PasswordResetToken\", PasswordResetTokenSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbW9kZWxzL1Bhc3N3b3JkUmVzZXRUb2tlbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFRdEQsTUFBTUUsMkJBQW1DLElBQUlELDRDQUFNQSxDQUFDO0lBQ2xERSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO1FBQU1FLFFBQVE7SUFBSztJQUNwREMsV0FBVztRQUFFTCxNQUFNTTtRQUFNSixVQUFVO1FBQU1LLFNBQVM7SUFBSztBQUN6RDtBQUVBLGlFQUFlWCx3REFBZSxDQUFDYSxrQkFBa0IsSUFBSWIscURBQWMsQ0FBc0Isc0JBQXNCRSx5QkFBeUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1zeXN0ZW0vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbW9kZWxzL1Bhc3N3b3JkUmVzZXRUb2tlbi50cz8yMjA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQYXNzd29yZFJlc2V0VG9rZW4gZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGV4cGlyZXNBdDogRGF0ZTtcbn1cblxuY29uc3QgUGFzc3dvcmRSZXNldFRva2VuU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB0b2tlbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgZXhwaXJlc0F0OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlLCBleHBpcmVzOiAnMWgnIH0sIC8vIFRva2VuIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWxldGVkIGFmdGVyIDEgaG91clxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5QYXNzd29yZFJlc2V0VG9rZW4gfHwgbW9uZ29vc2UubW9kZWw8SVBhc3N3b3JkUmVzZXRUb2tlbj4oJ1Bhc3N3b3JkUmVzZXRUb2tlbicsIFBhc3N3b3JkUmVzZXRUb2tlblNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJQYXNzd29yZFJlc2V0VG9rZW5TY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRva2VuIiwidW5pcXVlIiwiZXhwaXJlc0F0IiwiRGF0ZSIsImV4cGlyZXMiLCJtb2RlbHMiLCJQYXNzd29yZFJlc2V0VG9rZW4iLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/models/PasswordResetToken.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/auth/src/models/User.ts":
/*!**********************************************!*\
  !*** ../../packages/auth/src/models/User.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/../../node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your name\"\n        ],\n        trim: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your email\"\n        ],\n        unique: true,\n        trim: true,\n        lowercase: true,\n        match: [\n            /.+@.+\\..+/,\n            \"Please enter a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ],\n        minlength: 6,\n        select: false\n    },\n    group: {\n        type: String,\n        default: \"user\"\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    verificationToken: {\n        type: String,\n        select: false\n    },\n    verificationTokenExpires: {\n        type: Date,\n        select: false\n    },\n    passwordResetToken: {\n        type: String,\n        select: false\n    },\n    passwordResetTokenExpires: {\n        type: Date,\n        select: false\n    }\n}, {\n    timestamps: true\n});\n// Hash password before saving\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\") || !this.password) {\n        return next();\n    }\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);\n    next();\n});\n// Method to compare entered password with hashed password\nUserSchema.methods.comparePassword = async function(password) {\n    if (!this.password) return false;\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, this.password);\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFDL0I7QUFpQjlCLE1BQU1HLGFBQTRCLElBQUlGLDRDQUFNQSxDQUMxQztJQUNFRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTJCO1FBQzVDQyxNQUFNO0lBQ1I7SUFDQUMsT0FBTztRQUNMSixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUE0QjtRQUM3Q0csUUFBUTtRQUNSRixNQUFNO1FBQ05HLFdBQVc7UUFDWEMsT0FBTztZQUFDO1lBQWE7U0FBcUM7SUFDNUQ7SUFDQUMsVUFBVTtRQUNSUixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUE0QjtRQUM3Q08sV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMWCxNQUFNQztRQUNOVyxTQUFTO0lBQ1g7SUFDQUMsWUFBWTtRQUNWYixNQUFNYztRQUNORixTQUFTO0lBQ1g7SUFDQUcsbUJBQW1CO1FBQ2pCZixNQUFNQztRQUNOUyxRQUFRO0lBQ1Y7SUFDQU0sMEJBQTBCO1FBQ3hCaEIsTUFBTWlCO1FBQ05QLFFBQVE7SUFDVjtJQUNBUSxvQkFBb0I7UUFDbEJsQixNQUFNQztRQUNOUyxRQUFRO0lBQ1Y7SUFDQVMsMkJBQTJCO1FBQ3pCbkIsTUFBTWlCO1FBQ05QLFFBQVE7SUFDVjtBQUNGLEdBQ0E7SUFBRVUsWUFBWTtBQUFLO0FBR3JCLDhCQUE4QjtBQUM5QnRCLFdBQVd1QixHQUFHLENBQVEsUUFBUSxlQUFnQkMsSUFBSTtJQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQ2YsUUFBUSxFQUFFO1FBQ2xELE9BQU9jO0lBQ1Q7SUFDQSxNQUFNRSxPQUFPLE1BQU0zQix1REFBYyxDQUFDO0lBQ2xDLElBQUksQ0FBQ1csUUFBUSxHQUFHLE1BQU1YLG9EQUFXLENBQUMsSUFBSSxDQUFDVyxRQUFRLEVBQUVnQjtJQUNqREY7QUFDRjtBQUVBLDBEQUEwRDtBQUMxRHhCLFdBQVc2QixPQUFPLENBQUNDLGVBQWUsR0FBRyxlQUFnQnBCLFFBQWdCO0lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPO0lBQzNCLE9BQU8sTUFBTVgsdURBQWMsQ0FBQ1csVUFBVSxJQUFJLENBQUNBLFFBQVE7QUFDckQ7QUFFQSxNQUFNc0IsT0FBcUJuQyx3REFBZSxDQUFDbUMsSUFBSSxJQUFJbkMscURBQWMsQ0FBUSxRQUFRRztBQUVqRixpRUFBZWdDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1zeXN0ZW0vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbW9kZWxzL1VzZXIudHM/YWYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIFNjaGVtYSwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgZ3JvdXA6IHN0cmluZztcbiAgaXNWZXJpZmllZDogYm9vbGVhbjtcbiAgdmVyaWZpY2F0aW9uVG9rZW4/OiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvblRva2VuRXhwaXJlcz86IERhdGU7XG4gIHBhc3N3b3JkUmVzZXRUb2tlbj86IHN0cmluZztcbiAgcGFzc3dvcmRSZXNldFRva2VuRXhwaXJlcz86IERhdGU7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xuICBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmNvbnN0IFVzZXJTY2hlbWE6IFNjaGVtYTxJVXNlcj4gPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgeW91ciBuYW1lJ10sXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIHlvdXIgZW1haWwnXSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgICBtYXRjaDogWy8uK0AuK1xcLi4rLywgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkJ10sXG4gICAgICBtaW5sZW5ndGg6IDYsXG4gICAgICBzZWxlY3Q6IGZhbHNlLCAvLyBEbyBub3QgcmV0dXJuIHBhc3N3b3JkIGJ5IGRlZmF1bHRcbiAgICB9LFxuICAgIGdyb3VwOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndXNlcicsXG4gICAgfSxcbiAgICBpc1ZlcmlmaWVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICB2ZXJpZmljYXRpb25Ub2tlbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICB9LFxuICAgIHZlcmlmaWNhdGlvblRva2VuRXhwaXJlczoge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgfSxcbiAgICBwYXNzd29yZFJlc2V0VG9rZW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgfSxcbiAgICBwYXNzd29yZFJlc2V0VG9rZW5FeHBpcmVzOiB7XG4gICAgICB0eXBlOiBEYXRlLFxuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuLy8gSGFzaCBwYXNzd29yZCBiZWZvcmUgc2F2aW5nXG5Vc2VyU2NoZW1hLnByZTxJVXNlcj4oJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuICBpZiAoIXRoaXMuaXNNb2RpZmllZCgncGFzc3dvcmQnKSB8fCAhdGhpcy5wYXNzd29yZCkge1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcbiAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xuICBuZXh0KCk7XG59KTtcblxuLy8gTWV0aG9kIHRvIGNvbXBhcmUgZW50ZXJlZCBwYXNzd29yZCB3aXRoIGhhc2hlZCBwYXNzd29yZFxuVXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGlmICghdGhpcy5wYXNzd29yZCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xufTtcblxuY29uc3QgVXNlcjogTW9kZWw8SVVzZXI+ID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXI+KCdVc2VyJywgVXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJiY3J5cHQiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJlbWFpbCIsInVuaXF1ZSIsImxvd2VyY2FzZSIsIm1hdGNoIiwicGFzc3dvcmQiLCJtaW5sZW5ndGgiLCJzZWxlY3QiLCJncm91cCIsImRlZmF1bHQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsInZlcmlmaWNhdGlvblRva2VuIiwidmVyaWZpY2F0aW9uVG9rZW5FeHBpcmVzIiwiRGF0ZSIsInBhc3N3b3JkUmVzZXRUb2tlbiIsInBhc3N3b3JkUmVzZXRUb2tlbkV4cGlyZXMiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2giLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY29tcGFyZSIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../packages/auth/src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.30_react-dom@18.2.0_react@18.2.0","vendor-chunks/next-auth@4.24.5_next@14.2.30_react-dom@18.2.0_react@18.2.0","vendor-chunks/@babel+runtime@7.27.6","vendor-chunks/bcryptjs@2.4.3","vendor-chunks/resend@4.6.0_react-dom@18.2.0_react@18.2.0","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.26.9","vendor-chunks/uuid@8.3.2","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.26.9","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0","vendor-chunks/oidc-token-hash@5.1.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/../../node_modules/.pnpm/next@14.2.30_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fefe%2FDocuments%2FNextJs%2FNextJs-Public%2FAuthenticationSystem%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();