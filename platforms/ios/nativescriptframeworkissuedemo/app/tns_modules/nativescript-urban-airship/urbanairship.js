"use strict";
var NsUrbanairship = (function () {
    function NsUrbanairship() {
        if (NsUrbanairship.instance) {
            throw new Error("Error: Instance failed: Use NsUrbanairship.getInstance() instead of new.");
        }
        NsUrbanairship.instance = this;
    }
    NsUrbanairship.getInstance = function () {
        return NsUrbanairship.instance;
    };
    NsUrbanairship.prototype.startUp = function (urbanAirshipSettings) {
        var config = UAConfig.defaultConfig();
        config.detectProvisioningMode = urbanAirshipSettings.detectProvisioningMode;
        config.developmentAppKey = urbanAirshipSettings.developmentAppKey;
        config.developmentAppSecret = urbanAirshipSettings.developmentAppSecret;
        config.productionAppKey = urbanAirshipSettings.productionAppKey;
        config.productionAppSecret = urbanAirshipSettings.productionAppSecret;
        config.inProduction = urbanAirshipSettings.inProduction;
        UAirship.takeOff(config);
        UAirship.push().notificationOptions = (UANotificationOptionAlert | UANotificationOptionBadge | UANotificationOptionSound);
    };
    NsUrbanairship.prototype.registerUser = function (userId) {
        UAirship.namedUser().identifier = userId;
    };
    NsUrbanairship.prototype.unRegisterUser = function () {
        UAirship.namedUser().identifier = null;
    };
    NsUrbanairship.prototype.notificationOptIn = function () {
        return this.setOptIn(true);
    };
    NsUrbanairship.prototype.notificationOptOut = function () {
        return this.setOptIn(false);
    };
    NsUrbanairship.prototype.setOptIn = function (optIn) {
        var _this = this;
        return new Promise(function (resolve) {
            UAirship.push().userPushNotificationsEnabled = optIn;
            resolve(_this.isOptIn());
        });
    };
    NsUrbanairship.prototype.isOptIn = function () {
        return UAirship.push().userPushNotificationsEnabled;
    };
    NsUrbanairship.prototype.getChannelID = function () {
        return UAirship.push().channelID;
    };
    NsUrbanairship.prototype.resetBadgeCount = function () {
        UAirship.push().resetBadge();
    };
    NsUrbanairship.instance = new NsUrbanairship();
    return NsUrbanairship;
}());
exports.NsUrbanairship = NsUrbanairship;
//# sourceMappingURL=urbanairship.js.map