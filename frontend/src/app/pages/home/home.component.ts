import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { HousesService } from 'src/app/services/houses.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  houses = [];

  constructor(service: HousesService){

    //calls getHouses function in housesService upon creation? results sent back is array of houses
    service.getHouses().subscribe(result=>{
      this.houses = result.data;
    });
  }

  ngOnInit(): void {
  }


  /*
  //example
  semesters=[];
  constructor(private projSvc:ProjectsService) { 
    projSvc.getProjects().subscribe(result=>{
      this.semesters=result.data.semesters;
    })
  }
  */

  

}
