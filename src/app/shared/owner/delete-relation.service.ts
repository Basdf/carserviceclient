import { Injectable } from '@angular/core';
import { CarService } from '../car/car.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteRelationService {
  cars: Array<any>;
  constructor(private carService: CarService) { }

  removeRelation(dni: any) {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      this.cars.forEach(carAux => {
        if (carAux.ownerDni == dni) {
          carAux.ownerDni = null;
          this.carService.save(carAux).subscribe(result => { }, error => console.error(error));
        }
      });
    });
  }
}
