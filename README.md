This repo is to demonstrate an issue we are currently having when trying to achieve both frameworks to work in unison for iOS

Synopsis When both frameworks are loaded and when calling the Urban Airship CocoaPod, the application crashes due to a reference of an object that is no longer available for the framework. The following:

```bash
The bundle “PersistenceTesting” couldn’t be loaded because its executable couldn’t be located.
```

This is coming from the Urban Airship plugin who cannot reference the item anymore.s