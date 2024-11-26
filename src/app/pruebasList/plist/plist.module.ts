import { Component, NgModule } from "@angular/core";
import { PlistComponent } from "./plist.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        PlistComponent
    ],
    exports:[
        PlistComponent
    ],
    imports:[
        CommonModule
    ]
})

export class plistModule{

}