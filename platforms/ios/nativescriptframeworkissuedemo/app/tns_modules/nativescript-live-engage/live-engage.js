"use strict";
var common = require("./live-engage.common");
var LiveEngage = (function (_super) {
    __extends(LiveEngage, _super);
    function LiveEngage() {
        var _this = _super.call(this) || this;
        _this._ios = new UIView(_this.mainScreen.bounds);
        _this._ios.clipsToBounds = true;
        _this.ios.autoresizingMask =
            2 |
                16;
        _this._viewController = UIViewController.new();
        _this._viewController.view.frame = _this.mainScreen.bounds;
        _this._viewController.view.autoresizingMask =
            2 |
                16;
        _this._ios.insertSubviewAtIndex(_this._viewController.view, 0);
        _this.loadChat(_this.brandId, _this.appId);
        return _this;
    }
    Object.defineProperty(LiveEngage.prototype, "mainScreen", {
        get: function () {
            return typeof UIScreen.mainScreen === 'function' ?
                UIScreen.mainScreen() :
                UIScreen.mainScreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveEngage.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    LiveEngage.prototype.loadChat = function (brandId, appId) {
        if (!brandId || !appId || !this.ios) {
            return;
        }
        LPMessagingSDK.instance.initializeError(brandId, null);
        var conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(brandId);
        LPMessagingSDK.instance.showConversationAuthenticationCodeContainerViewController(conversationQuery, null, this._viewController);
        this.setUserProfile();
    };
    LiveEngage.prototype.setUserProfile = function () {
        var user = LPUser.alloc().initWithFirstNameLastNameNickNameUidProfileImageURLPhoneNumberEmployeeID(this.firstName, this.lastName, "", "", "", this.phone, "");
        LPMessagingSDK.instance.setUserProfileBrandID(user, this.brandId);
    };
    return LiveEngage;
}(common.LiveEngage));
exports.LiveEngage = LiveEngage;
//# sourceMappingURL=live-engage.js.map