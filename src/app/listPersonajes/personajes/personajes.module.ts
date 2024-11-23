import { Component, NgModule } from "@angular/core";
import { PersonajesComponent } from "./personajes.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        PersonajesComponent
    ],
    exports:[
        PersonajesComponent
    ],
    imports:[
        CommonModule
    ]
})

export class PersonajeModule{

}