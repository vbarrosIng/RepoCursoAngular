import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfacesDbz/personaje.interface';
import {ServicedbzService} from '../services/servicedbz.service'

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './app-main.component.html'
})

export class DbzComponent {
    constructor(public ServicedbzService: ServicedbzService ){
        
    }
 
}