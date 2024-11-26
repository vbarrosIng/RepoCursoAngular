import { Component, EventEmitter, Output } from '@angular/core';
import { IListPruebas } from '../../interfaces/pruebasInterface';

@Component({
  selector: 'app-pform',
  templateUrl: './pform.component.html',
  styleUrl: './pform.component.css'
})
export class PformComponent {
  @Output()
  public evenAgregarPer: EventEmitter<IListPruebas> = new EventEmitter()


  public iListPruebas: IListPruebas = {
    nombre : "",
    correo : ""
  }
  

  agregarPer():void{
    this.evenAgregarPer.emit({...this.iListPruebas})
    this.iListPruebas.nombre = "";
    this.iListPruebas.correo = ""
  }
}
