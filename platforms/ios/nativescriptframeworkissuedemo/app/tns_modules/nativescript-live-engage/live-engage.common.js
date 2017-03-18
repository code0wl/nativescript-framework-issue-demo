"use strict";
var dependency_observable_1 = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var view = require("ui/core/view");
var LiveEngage = (function (_super) {
    __extends(LiveEngage, _super);
    function LiveEngage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LiveEngage.prototype, "brandId", {
        get: function () {
            return this._getValue(LiveEngage.brandIdProperty).toString();
        },
        set: function (value) {
            this._setValue(LiveEngage.brandIdProperty, value);
            this.loadChat(value.toString(), this.appId.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveEngage.prototype, "appId", {
        get: function () {
            return this._getValue(LiveEngage.appIdProperty).toString();
        },
        set: function (value) {
            this._setValue(LiveEngage.appIdProperty, value);
            this.loadChat(this.brandId.toString(), value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveEngage.prototype, "firstName", {
        get: function () {
            return this._getValue(LiveEngage.firstNameProperty).toString();
        },
        set: function (value) {
            this._setValue(LiveEngage.firstNameProperty, value);
            this.setUserProfile();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveEngage.prototype, "lastName", {
        get: function () {
            return this._getValue(LiveEngage.lastNameProperty).toString();
        },
        set: function (value) {
            this._setValue(LiveEngage.lastNameProperty, value);
            this.setUserProfile();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveEngage.prototype, "phone", {
        get: function () {
            return this._getValue(LiveEngage.phoneProperty).toString();
        },
        set: function (value) {
            this._setValue(LiveEngage.phoneProperty, value);
            this.setUserProfile();
        },
        enumerable: true,
        configurable: true
    });
    return LiveEngage;
}(view.View));
LiveEngage.brandIdProperty = new dependency_observable_1.Property('brandId', 'LiveEngage', new proxy.PropertyMetadata(''));
LiveEngage.appIdProperty = new dependency_observable_1.Property('appId', 'LiveEngage', new proxy.PropertyMetadata(''));
LiveEngage.firstNameProperty = new dependency_observable_1.Property('firstName', 'LiveEngage', new proxy.PropertyMetadata(''));
LiveEngage.lastNameProperty = new dependency_observable_1.Property('lastName', 'LiveEngage', new proxy.PropertyMetadata(''));
LiveEngage.phoneProperty = new dependency_observable_1.Property('phone', 'LiveEngage', new proxy.PropertyMetadata(''));
exports.LiveEngage = LiveEngage;
try {
    var registerElement = require('nativescript-angular/element-registry').registerElement;
    registerElement('LiveEngage', function () { return require('./live-engage').LiveEngage; });
}
catch (e) {
}
//# sourceMappingURL=live-engage.common.js.map