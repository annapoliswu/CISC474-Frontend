import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  activeClass = 'activeClass';
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
