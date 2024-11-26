import { Component, Input } from '@angular/core';
import { IListPruebas } from './interfaces/pruebasInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @Input()
  
  public title: string = 'Mi primera App Web';
  public counter: number = 0;

  public plistPruebas : IListPruebas[] = [
    {
      nombre : "victor",
      correo : "victor@gmail.com"
    },
    {
      nombre : "geidys",
      correo : "geidys@gmail.com"
    }
  ] 

  evenAgregarPer(IListPruebas: IListPruebas):void{
    this.plistPruebas.push(IListPruebas)
  }

  incrementar(): void {
    this.counter += 1
  }

  decrecer(): void {
    this.counter -= 1
  }

  reset(): void {
    this.counter = 0
  }
}
