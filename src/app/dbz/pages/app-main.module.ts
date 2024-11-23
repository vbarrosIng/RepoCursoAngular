import { Component, NgModule } from "@angular/core";
import {DbzComponent } from './app-main.component'
import { PersonajeModule } from "../../listPersonajes/personajes/personajes.module";
import { FormPersonModule } from "../../formPersonajes/form-person/form-person.module";



// En esta parte dentro del modulo se debe declarar el nombre de la clase de mi 
// component y esa misma debo exportar. Dentro de app.module debo importar el nombre de
//la clase de este modulo "appMainModule"
@NgModule({
    declarations:[
        DbzComponent
    ],
    exports:[
        DbzComponent
    ],
    imports:[
        PersonajeModule,
        FormPersonModule
    ]

})

export class appMainModule{

}