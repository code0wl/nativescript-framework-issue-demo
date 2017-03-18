// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { isIOS } from 'platform';
import { CustomDelegate } from './custom.delegate';
import application = require('application');

if (isIOS) {
    application.ios.delegate = CustomDelegate;
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
