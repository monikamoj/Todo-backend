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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "./pages/api/todos.js":
/*!****************************!*\
  !*** ./pages/api/todos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/database.js */ \"./utils/database.js\");\n\nasync function handler(request, response) {\n  try {\n    // Connect the client to the server, select db and collection\n    await _utils_database_js__WEBPACK_IMPORTED_MODULE_0__.client.connect();\n    const db = _utils_database_js__WEBPACK_IMPORTED_MODULE_0__.client.db(\"todoapp\");\n    const collection = db.collection(\"todos\"); // find, update or insert data - your code goes here:\n\n    const data = await collection.find({}).toArray(); // respond with data…\n\n    response.status(200).json(data);\n  } catch (error) {\n    response.status(500).json({\n      error: \"Something went wrong!\"\n    });\n  } finally {\n    // Ensures that the client will close when you finish/error\n    await _utils_database_js__WEBPACK_IMPORTED_MODULE_0__.client.close();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLE9BQXZCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN2RCxNQUFJO0FBQ0Y7QUFDQSxVQUFNSCw4REFBQSxFQUFOO0FBQ0EsVUFBTUssRUFBRSxHQUFHTCx5REFBQSxDQUFVLFNBQVYsQ0FBWDtBQUNBLFVBQU1NLFVBQVUsR0FBR0QsRUFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxDQUFuQixDQUpFLENBTUY7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1ELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixFQUFoQixFQUFvQkMsT0FBcEIsRUFBbkIsQ0FQRSxDQVFGOztBQUNBTixJQUFBQSxRQUFRLENBQUNPLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCSixJQUExQjtBQUNELEdBVkQsQ0FVRSxPQUFPSyxLQUFQLEVBQWM7QUFDZFQsSUFBQUEsUUFBUSxDQUFDTyxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUExQjtBQUNELEdBWkQsU0FZVTtBQUNSO0FBQ0EsVUFBTVosNERBQUEsRUFBTjtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9wYWdlcy9hcGkvdG9kb3MuanM/NjNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICB0cnkge1xuICAgIC8vIENvbm5lY3QgdGhlIGNsaWVudCB0byB0aGUgc2VydmVyLCBzZWxlY3QgZGIgYW5kIGNvbGxlY3Rpb25cbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwidG9kb2FwcFwiKTtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInRvZG9zXCIpO1xuXG4gICAgLy8gZmluZCwgdXBkYXRlIG9yIGluc2VydCBkYXRhIC0geW91ciBjb2RlIGdvZXMgaGVyZTpcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29sbGVjdGlvbi5maW5kKHt9KS50b0FycmF5KCk7XG4gICAgLy8gcmVzcG9uZCB3aXRoIGRhdGHigKZcbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIiB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGNsaWVudCB3aWxsIGNsb3NlIHdoZW4geW91IGZpbmlzaC9lcnJvclxuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50IiwiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbm5lY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJkYXRhIiwiZmluZCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/todos.js\n");

/***/ }),

/***/ "./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb://localhost:27017/\";\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBRyw0QkFBWjtBQUNPLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixnREFBSixDQUFnQkMsR0FBaEIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYmFja2VuZC8uL3V0aWxzL2RhdGFiYXNlLmpzP2UyMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCB1cmkgPSBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvXCI7XG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/database.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos.js"));
module.exports = __webpack_exports__;

})();