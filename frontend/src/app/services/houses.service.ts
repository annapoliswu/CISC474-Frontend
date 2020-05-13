import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getHouse(id): Observable<any>{
    //logic to get houses from database here
    //return ["house1", "house2", "house3", "house4"];
    return this.http.get(this.path + id);
  }
  postHouse(){
    //logic to get houses from database here
    //return ["house1", "house2", "house3", "house4"];
    return this.http.get(this.path);
  }

}
