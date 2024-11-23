import { Component, NgModule } from "@angular/core";
import { FormPersonComponent } from "./form-person.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        FormPersonComponent
    ],exports:[
        FormPersonComponent
    ], imports:[
        FormsModule
    ]
})

export class FormPersonModule{
    
}