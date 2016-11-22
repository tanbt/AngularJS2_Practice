import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent}   from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

import { AppRoutingModule }  from './app-routing-module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [HeroService],    //don't need provider for built-in Router
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
