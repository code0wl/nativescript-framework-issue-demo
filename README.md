# NativeScript external plugin issue
## Synopsis
This repo is a demo for the issue we are currently having when trying to achieve both frameworks to work in unison for iOS

When both frameworks are loaded and when calling the Urban Airship CocoaPod, the application crashes due to a reference of an object that is no longer available for the framework. The following:

> Xcode debug sdtout
```bash
The bundle “PersistenceTesting” couldn’t be loaded because its executable couldn’t be located.
```

> bash debug stdout  
```bash
Mar 16 11:02:23 Oscars-MacBook-Pro com.apple.CoreSimulator.SimDevice.93AAB200-A581-4BE4-BEC0-4360B1FA74FB.launchd_sim[95792] (UIKitApplication:org.nativescript.frameworkissuedemo[0x93fc][73825]): Service exited due to Segmentation fault: 11
```

This is coming from the Urban Airship plugin who cannot reference the item anymore.

#### Plugins
The plugins in question are

- [nativescript-live-engage](https://github.com/Essent/nativescript-live-engage)
- [nativescript-urban-airship](https://github.com/Essent/nativescript-urban-airship)

Point of interest is that the urban-airship library is included as a cocoapod and the liveperson live engage library is included as a framework which gets put in the correct output directory via an after-prepare hook npm script

