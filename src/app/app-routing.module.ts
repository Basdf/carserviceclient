import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component'
import {OwnersEditComponent} from './owners/owners-edit/owners-edit.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'owner-edit/:dni',
    component: OwnersEditComponent
  },
  {
    path: 'owner-list',
    component: OwnersListComponent
  },
  {
    path: 'owner-add',
    component: OwnersEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
