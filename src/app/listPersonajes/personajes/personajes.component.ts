import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../../dbz/interfacesDbz/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
    @Output()
    public onDeletePersonaje : EventEmitter<number> = new EventEmitter();

    @Input()
    public PersonajeC: IPersonaje[] =[
        {
            name: "Trunks",
            power: 10
        }
    ]

    deletePersona(index: number): void{
        this.onDeletePersonaje.emit(index);
    }
}
