import 'dash-checkbox';
import 'dash-listbox';

// import 'web_component/foo-bar.js';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule
    ],
    providers   : [],
    bootstrap   : [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
