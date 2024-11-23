import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'; 
import { AppHeroesListComponent } from "./app-heroes-list.component";

@NgModule ({
    declarations:[
        AppHeroesListComponent,
        
        
    ],
    exports:[
        AppHeroesListComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroListModule{

}