import { NsUrbanairship } from 'nativescript-urban-airship';

const urbanAirshipSettings = {
    developmentAppKey: 'test',
    developmentAppSecret: 'test-w',
    gcmSender: 'test',
    detectProvisioningMode: false,
    inProduction: false,
    productionAppKey: '',
    productionAppSecret: ''
};

declare const LPMessagingSDK: any;

export class CustomDelegate extends UIResponder implements UIApplicationDelegate {

    /**
     * Needed for NativeScript to use the methods in our AppDelegate.
     */
    public static ObjCProtocols: Object = [UIApplicationDelegate];

    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {

        // Call to UrbanAirShip for takeoff. Will never actually be successful
        // Is to serve as a test if takeoff is is called.
        NsUrbanairship.getInstance().startUp(urbanAirshipSettings);

        // initialize LivePersonSDK with a dummy account.
        // Will never work but serves to show if the component is not clashing with the cocoapods
        LPMessagingSDK.instance.initializeError('12345678');

        return true;
    }

    public applicationDidBecomeActive(application: UIApplication): void {
        // does nothing for now
    }

    public applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean {
        return true;
    }
}
