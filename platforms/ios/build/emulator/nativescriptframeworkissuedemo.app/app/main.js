"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var platform_2 = require("platform");
var custom_delegate_1 = require("./custom.delegate");
var application = require("application");
if (platform_2.isIOS) {
    application.ios.delegate = custom_delegate_1.CustomDelegate;
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
