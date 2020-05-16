import { Component, OnInit, Input } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HouseinfoComponent} from 'src/app/components/houseinfo/houseinfo.component'

@Component({
  selector: 'app-housecard',
  templateUrl: './housecard.component.html',
  styleUrls: ['./housecard.component.scss']
})
export class HousecardComponent implements OnInit {

  //all things you can input on html tag need decorator
  @Input() cardtitle:string;
  @Input() cardtext:string;
  @Input() houseid:string; //passed in in html 

  favorited = false;

  constructor( public authSvc:AuthService,  private houseSvc: HousesService,  private modalService: NgbModal) { 
  }

  ngOnInit(): void {
  }

  favorite(){
    this.favorited = true;
    this.authSvc.addFavorite(this.houseid).subscribe(result=>{
      console.log(result);
    });
    //other logic put id into user etc authSvc.addFavorite(id);
  }

  unfavorite(){
    this.favorited = false;
    this.authSvc.deleteFavorite(this.houseid).subscribe(result=>{
      console.log(result);
    });
    //logic to remove id from user favs
  }

  openInfo(): void {
    const modalRef = this.modalService.open(HouseinfoComponent, {size: 'xl'});
    modalRef.componentInstance.id = this.houseid;
    console.log(this.houseid);
  }

  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }


}
