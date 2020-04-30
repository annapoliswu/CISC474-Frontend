import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { }

  getHouses(){
    //logic to get houses from database here
    return ["house1", "house2", "house3", "house4"];
  }

}
