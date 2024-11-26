import { Component, NgModule } from "@angular/core";
import { PformComponent } from "./pform.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        PformComponent
    ],
    exports:[
        PformComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})

export class pformModule{
}