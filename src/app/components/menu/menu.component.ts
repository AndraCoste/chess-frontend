import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  private isCollapsed: boolean = true;
  constructor() {
  }

  ngOnInit() {
  }

}
