import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './cars/car-list/car-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { OwnersEditComponent } from './owners/owners-edit/owners-edit.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    NavbarComponent,
    OwnersListComponent,
    OwnersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
