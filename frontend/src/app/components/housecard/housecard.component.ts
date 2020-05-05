import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-housecard',
  templateUrl: './housecard.component.html',
  styleUrls: ['./housecard.component.scss']
})
export class HousecardComponent implements OnInit {
  @Input() cardtitle:string;
  @Input() cardtext:string;
  constructor() { }

  ngOnInit(): void {
  }

}
