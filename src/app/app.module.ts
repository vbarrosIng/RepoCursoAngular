import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { HeroMdule } from './heroes/hero/hero.module';
import { HeroListModule } from './list/app-heroes-list/app-heros-list.module';
import { appMainModule } from './dbz/pages/app-main.module';
import { PersonajeModule } from './listPersonajes/personajes/personajes.module';
import { plistModule } from './pruebasList/plist/plist.module';
import { pformModule } from './pruebasForm/pform/pform.module';





@NgModule({
  declarations: [
    AppComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroMdule,
    HeroListModule,
    appMainModule,
    PersonajeModule,
    pformModule,
    plistModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
