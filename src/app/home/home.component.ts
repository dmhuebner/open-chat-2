import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  welcomeText = 'Welcome to Open Chat!';

  ngOnInit() {
  }

}
