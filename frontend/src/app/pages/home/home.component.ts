import { Component, OnInit, ViewChild, ElementRef,} from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { HousesService } from 'src/app/services/houses.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HouseinfoComponent} from 'src/app/components/houseinfo/houseinfo.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  houses = [];

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(service: HousesService, private modalService: NgbModal){

    //calls getHouses function in housesService upon creation? results sent back is array of houses
    service.getHouses().subscribe(result=>{
      this.houses = result.data;
    });
  }

  ngOnInit(): void {
  }

  openInfo(id): void {
    const modalRef = this.modalService.open(HouseinfoComponent, {size: 'xl'});
    modalRef.componentInstance.id = id;
    console.log(id);
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
