import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public title: string = 'Mi primera App Web';
    public counter:number = 0
    

  incrementar(): void{
    this.counter += 1
  }

  decrecer():void{
    this.counter -= 1
  }

  reset():void{
    this.counter = 0
  }
}
