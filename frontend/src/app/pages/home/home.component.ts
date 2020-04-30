import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  houses;

  constructor(service: HousesService){
    this.houses = service.getHouses();
  }

  ngOnInit(): void {
  }

  /*
  semesters=[];
  constructor(private projSvc:ProjectsService) { 
    projSvc.getProjects().subscribe(result=>{
      this.semesters=result.data.semesters;
    })
  }
  */

  

}
