import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-housecard',
  templateUrl: './housecard.component.html',
  styleUrls: ['./housecard.component.scss']
})
export class HousecardComponent implements OnInit {

  //all things you can input on html tag need decorator
  @Input() cardtitle:string;
  @Input() cardtext:string;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
