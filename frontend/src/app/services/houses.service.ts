import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private path='http://localhost:3000/api/houses/';

  constructor(private http:HttpClient) { }

  getHouses(): Observable<any>{
    //logic to get houses from database here
    //return ["house1", "house2", "house3", "house4"];
    return this.http.get(this.path);
  }
  postHouse(obj:any){
    return this.http.post(this.path,{
      "title": obj.title, 
      "description": obj.description,
      "street": obj.street,
      "state": obj.state,
      "city": obj.city,
      "zip": obj.zip,
      "price": obj.price,
      "bedrooms": obj.bedrooms,
      "bathrooms": obj.bathrooms,
      "sqfeet": obj.sqfeet,
      "contactemail": obj.contactemail,
      "contactphone": obj.contactphone
      });
  }

}
