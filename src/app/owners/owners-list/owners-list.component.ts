import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/owner/owner.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {
  owners: Array<any>;
  checkedBool: boolean=true;
  constructor(private ownerService: OwnerService) { }

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
      if(ownerAux.check) {  
        ownerAux.check = false;
        this.ownerService.remove(ownerAux._links.self.href);
      }
    });
  } 

  changeSlideEvent() {
    this.owners.forEach(owner => owner.check = false);
    this.checkedBool= true;
  } 

  changeCheckBoxEvent() {
    (this.owners.some(owner => owner.check) ? this.checkedBool= false : this.checkedBool= true); 
  }
}
