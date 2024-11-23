import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfacesDbz/personaje.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './app-main.component.html'
})

export class DbzComponent {
    
    public PersonajeC: IPersonaje[] =[
        {
            name: "Krilin",
            power: 2500
        },
        {
            name: "Goku",
            power: 9500
        },
        {
            name: "Gohan",
            power: 7500
        }
    ]

    onNewPersonaje(personaje : IPersonaje):void{
        this.PersonajeC.push(personaje)
    }

    onDeletePersonaje(index:number):void{
        this.PersonajeC.splice(index, 1)
    }
}