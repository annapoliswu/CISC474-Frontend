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
  autsv = null;
  hsvc = null;

  constructor(private route: ActivatedRoute,private router: Router,private authSvc:AuthService, private houseSvc: HousesService, private modalService: NgbModal){
    this.autsv = authSvc;
    this.hsvc = houseSvc;

  }
  ngOnInit(): void {
    var self = this;
    this.autsv.getFavorites().subscribe(result=>{
      let houseids = result.data;
      console.log(houseids);
      houseids.forEach(houseid=> {
        this.hsvc.getHouse(houseid).subscribe(result=>{self.houses.push(result.data);console.log(self.houses)});
      });

    });
  }
/*
  authService.getFavorites().subscribe(result=>{
    this.houses = result.data;
  });
  */


}
