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
    try{
        javascriptLogger.info(message);
    }
    catch (err){
        console.info(message);
    }

};

AppLogger.debug = function (message) {

    try{
        javascriptLogger.debug(message);
    }
    catch (err){
        console.debug(message);
    }

};

AppLogger.error = function (message) {

    try{
        javascriptLogger.error(message);
    }
    catch (err){
        console.error(message);
    }
};

//module.exports = AppLogger;
exports.LoggerInstance = AppLogger;