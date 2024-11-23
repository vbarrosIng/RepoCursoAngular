import { Component } from '@angular/core';
import { Alumno } from '../../interfaces/Ialumno';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './app-heroes-list.component.html',
  styleUrl: './app-heroes-list.component.css'
})
export class AppHeroesListComponent {
  public nombre:string = 'victor'
  public edad:number = 27

  public validarTabla : boolean = false

  public alumno : Alumno[] = [{
    "Nombre": "victor",
    "Edad": 27,
    "Clase": "angular"
  },
  {
    "Nombre": "Geidys",
    "Edad": 24,
    "Clase": "Peluqueria"
  },
  {
    "Nombre": "Nacy",
    "Edad": 74,
    "Clase": "Ama de casa"
  }

]
  
  mostrarTable():void{
    this.validarTabla = true
  }

  ocultarTable():void{
    this.validarTabla = false
  }

  obtenerOpciones(): string{
    let resultado = this.ejecOpciones();
    return resultado;
  }

  private ejecOpciones(): string{
    return `${this.nombre} - ${this.edad} `

  }

  cambiarNombre():void{
    this.nombre = "victor 2"
  }

  cambiarEdad():void{
    this.edad = 28
  }

}


