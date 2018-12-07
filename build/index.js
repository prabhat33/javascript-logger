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
        if(isObject(message)) message= JSON.stringify(message);
        javascriptLogger.info(message);
    }
    catch (err){
        console.info(message);
    }

};

AppLogger.debug = function (message) {

    try{
        if(isObject(message)) message= JSON.stringify(message);
        javascriptLogger.debug(message);
    }
    catch (err){
        console.debug(message);
    }


};

AppLogger.error = function (message) {

    try{
        if(isObject(message)) message= JSON.stringify(message);
        javascriptLogger.error(message);
    }
    catch (err){
        console.error(message);
    }
};

function isObject(message){
    if(typeof message == 'object')
        return true;
    return false;
}

//module.exports = AppLogger;
exports.LoggerInstance = AppLogger;