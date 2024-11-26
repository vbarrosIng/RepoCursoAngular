import { Component, Input, input } from '@angular/core';
import { IListPruebas } from '../../interfaces/pruebasInterface';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrl: './plist.component.css'
})
export class PlistComponent {

    @Input()
    public plistPruebas : IListPruebas[] = [
      {
        nombre : "pruebas",
        correo : "pruebas@gmail.com"
      }
    ]
}
