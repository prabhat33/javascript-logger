"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoggerInstance = undefined;

var _typescriptLogging = require("typescript-logging");

_typescriptLogging.CategoryServiceFactory.setDefaultConfiguration(new _typescriptLogging.CategoryConfiguration(_typescriptLogging.LogLevel.Info));

var javascriptLogger = new _typescriptLogging.Category("JavascriptLogger");

var AppLogger = {};

AppLogger.info = function (message) {
    javascriptLogger.info(message);
};

AppLogger.debug = function (message) {
    javascriptLogger.debug(message);
};

AppLogger.error = function (message) {
    javascriptLogger.error(message);
};

//module.exports = AppLogger;
exports.LoggerInstance = AppLogger;