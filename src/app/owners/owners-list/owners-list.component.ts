import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/owner/owner.service';
import { CarService } from 'src/app/shared/car/car.service';
import { DeleteRelationService } from 'src/app/shared/owner/delete-relation.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {
  owners: Array<any>;
  cars: Array<any>;
  checkedBool = true;
  checked;
  constructor(private ownerService: OwnerService,
  private deleteService:DeleteRelationService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      for (const owner of this.owners) {
        owner.check = false;
      }
    });
  }
  removeSelected() {
    this.owners.forEach(ownerAux => {
      if (ownerAux.check) {
        ownerAux.check = false;
        this.ownerService.remove(ownerAux._links.self.href).subscribe(result => {

          this.ngOnInit();
        }, error => console.error(error));
        this.deleteService.removeRelation(ownerAux.dni);
      }
    });
  }
  changeSlideEvent() {
    this.owners.forEach(owner => owner.check = false);
    this.checkedBool = true;
  }
  changeCheckBoxEvent() {
    (this.owners.some(owner => owner.check) ? this.checkedBool = false : this.checkedBool = true);
  }


}
