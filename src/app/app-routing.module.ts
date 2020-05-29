import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { BuzzerComponent } from "./buzzer/buzzer.component";

const routes: Routes = [
    { path: "", redirectTo: "/buzzer", pathMatch: "full" },
    { path: "buzzer", component: BuzzerComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
