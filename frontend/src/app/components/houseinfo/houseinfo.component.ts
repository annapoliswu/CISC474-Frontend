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
    "photo": ""
};
  service = null;

  constructor(service: HousesService, public activeModal: NgbActiveModal) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getHouse(this.id).subscribe(result=>{
      this.house = result.data;
      if (this.house.photo != "") {
        this.imageObject.push({image: this.house.photo, thumbImage: this.house.photo});
      }
    });
  }


  imageObject = [{
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    thumbImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}, {
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    thumbImage: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}, {
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    thumbImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
},{
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    thumbImage: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}, {
    image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    thumbImage: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}, {
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    thumbImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}];

}
