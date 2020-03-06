import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OwnerService } from 'src/app/shared/owner/owner.service';
import { CarService } from 'src/app/shared/car/car.service';
import { DeleteRelationService } from 'src/app/shared/owner/delete-relation.service';

@Component({
  selector: 'app-owners-edit',
  templateUrl: './owners-edit.component.html',
  styleUrls: ['./owners-edit.component.css']
})
export class OwnersEditComponent implements OnInit {
  owner: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService,
    private deleteService:DeleteRelationService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const dni = params['dni'];
      if (dni) {
        this.ownerService.get(dni).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner._embedded.owners[0];
            this.owner.href = owner._embedded.owners[0]._links.self.href;

          } else {
            console.log(`Owner with dni '${dni}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(form: NgForm) {
    this.ownerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(owner) {
    this.ownerService.remove(owner.href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
    this.deleteService.removeRelation(owner.dni)
  }

}
