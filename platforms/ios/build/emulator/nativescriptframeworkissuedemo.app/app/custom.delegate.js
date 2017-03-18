"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_urban_airship_1 = require("nativescript-urban-airship");
var urbanAirshipSettings = {
    developmentAppKey: 'test',
    developmentAppSecret: 'test-w',
    gcmSender: 'test',
    detectProvisioningMode: false,
    inProduction: false,
    productionAppKey: '',
    productionAppSecret: ''
};
var CustomDelegate = (function (_super) {
    __extends(CustomDelegate, _super);
    function CustomDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
        // Call to UrbanAirShip for takeoff. Will never actually be successful
        // Is to serve as a test if takeoff is is called.
        nativescript_urban_airship_1.NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
        // initialize LivePersonSDK with a dummy account.
        // Will never work but serves to show if the component is not clashing with the cocoapods
        LPMessagingSDK.instance.initializeError('12345678');
        return true;
    };
    CustomDelegate.prototype.applicationDidBecomeActive = function (application) {
        // does nothing for now
    };
    CustomDelegate.prototype.applicationOpenURLSourceApplicationAnnotation = function (application, url, sourceApplication, annotation) {
        return true;
    };
    return CustomDelegate;
}(UIResponder));
/**
 * Needed for NativeScript to use the methods in our AppDelegate.
 */
CustomDelegate.ObjCProtocols = [UIApplicationDelegate];
exports.CustomDelegate = CustomDelegate;
