import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-houseinfo',
  templateUrl: './houseinfo.component.html',
  styleUrls: ['./houseinfo.component.scss']
})
export class HouseinfoComponent implements OnInit {

  //all things you can input on html tag need decorator
  @Input() id;
  house = {
    "title": "",
    "description": "",
    "street": "",
    "state": "",
    "city": "",
    "zip": "",
    "price": "",
    "bedrooms": "",
    "bathrooms": "",
    "sqfeet": "",
    "contactemail": "",
    "contactphone": "",
    "photos": []
};
  service = null;

  constructor(service: HousesService, public activeModal: NgbActiveModal) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getHouse(this.id).subscribe(result=>{
      this.house = result.data;
      if (this.house.photos.length > 0) {
        this.house.photos.forEach(h => {
          this.imageObject.push({image: h, thumbImage: h});
        })
      }
    });
  }


  imageObject = [];

}
