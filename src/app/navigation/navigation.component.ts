import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  isCollapsed: Boolean = true;

  ngOnInit() {
  }

  toggleNavCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
