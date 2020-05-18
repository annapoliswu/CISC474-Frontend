import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-userlistings',
  templateUrl: './userlistings.component.html',
  styleUrls: ['./userlistings.component.scss']
})
export class UserlistingsComponent implements OnInit {
  houses = [];
  aservice = null;
  hservice = null;

  constructor(private route: ActivatedRoute,private router: Router,private authSvc:AuthService, private houseSvc: HousesService, private modalService: NgbModal){
  this.aservice = authSvc;
  this.hservice = houseSvc;

  }
  
  ngOnInit(): void {
    this.aservice.getListings().subscribe(result=>{
      let houseids = result.data;
      console.log(houseids); 
      houseids.forEach(houseid=> {
        this.hservice.getHouse(houseid).subscribe(result=>{this.houses.push(result.data);});
      });
    });
  }

}
