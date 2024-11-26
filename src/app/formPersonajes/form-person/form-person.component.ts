import { Component, EventEmitter, Output } from '@angular/core';
import { IPersonaje } from '../../dbz/interfacesDbz/personaje.interface';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.css'
})
export class FormPersonComponent {

@Output()
public onNewPersonaje : EventEmitter<IPersonaje> = new EventEmitter()
 
  public caracter: IPersonaje = {
    name : "",
    power : 0
  }

  emitir():void{
    console.log(this.caracter)
    if (this.caracter.name.length === 0) return;
    this.onNewPersonaje.emit({...this.caracter})
    this.caracter.name = ""
    this.caracter.power = 0
  }
}
