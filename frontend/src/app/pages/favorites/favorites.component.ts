import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HouseinfoComponent } from 'src/app/components/houseinfo/houseinfo.component';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  houses = [];
  houseids = [];

  constructor(private route: ActivatedRoute,private router: Router,private authSvc:AuthService, houseSvc: HousesService, private modalService: NgbModal){
    authSvc.getFavorites().subscribe(result=>{
      this.houseids = result.data;
      console.log(this.houseids);
      this.houseids.forEach(houseid=> {
        //console.log(houseid);
        
        //this.houses.push(houseSvc.getHouse("5eb5a1fbe2e28b1d9c2aafc2"));
        //service.getHouses().subscribe(result=>{this.houses = result.data;});

        houseSvc.getHouse(houseid).subscribe(result=>{this.houses.push(result.data);});
      });
      /*
      this.houseids.forEach(function (houseid) {
        this.houses.push(houseSvc.getHouse(houseid));
      }); 
      */
    });
  }
  ngOnInit(): void {
  }
/*
  authService.getFavorites().subscribe(result=>{
    this.houses = result.data;
  });
  */
 openInfo(id): void {
  const modalRef = this.modalService.open(HouseinfoComponent, {size: 'xl'});
  modalRef.componentInstance.id = id;
  console.log(id);
}


}
