import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BuzzerComponent } from './buzzer/buzzer.component';

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { BuzzerService } from "./buzzer/buzzer.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        BuzzerComponent
    ],
    providers: [
        BuzzerService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
