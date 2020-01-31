import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/owner/owner.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {
  owners: Array<any>;
  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
    });
  }

}
