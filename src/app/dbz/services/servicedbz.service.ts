import { Injectable } from '@angular/core';
import { IPersonaje } from '../interfacesDbz/personaje.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class ServicedbzService {

    public PersonajeC: IPersonaje[] = [
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

    onNewPersonaje(personaje: IPersonaje): void {
        this.PersonajeC.push(personaje)
    }

    onDeletePersonaje(index: number): void {
        this.PersonajeC.splice(index, 1)
    }
}
