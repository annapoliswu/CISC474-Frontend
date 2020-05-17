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
  @Input() trashEnabled:boolean = false;

  favorited:boolean;
  

  constructor( private authSvc:AuthService,  private houseSvc: HousesService,  private modalService: NgbModal) { 

    /*there is definitely a better way to do this, but it requires messing with user structure
      and replay objects in authSvc? to keep favs in frontend and i'm lacking time */ 
    this.authSvc.getFavorites().subscribe(result=>{
      let favIds = result.data;
        if(favIds.indexOf(this.houseid) > -1){
          this.favorited = true;
        }else{
          this.favorited = false;
        }
      });
  }

  ngOnInit(): void {
  }

  favorite(){
    this.favorited = true;
    this.authSvc.addFavorite(this.houseid).subscribe(result=>{
      //console.log(result);
    });
    
  }

  unfavorite(){
    this.favorited = false;
    this.authSvc.deleteFavorite(this.houseid).subscribe(result=>{
      //console.log(result);
    });
  }

  openInfo(): void {
    const modalRef = this.modalService.open(HouseinfoComponent, {size: 'xl'});
    modalRef.componentInstance.id = this.houseid;
    console.log(this.houseid);
  }

  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }

  delete(){
    //deletes from user array
    this.authSvc.deleteListing(this.houseid).subscribe(result=>{
      console.log('delete ' + result);
      if(result.status === 'success'){
        //deletes from database
        this.houseSvc.deleteHouse(this.houseid).subscribe(result=>{});
      }
    });

  }


}
