import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info={
    nom:"yassine",
    email:"yassine@gmail.com",
    tel:"11223344"
  };

  constructor() { }

  ngOnInit() {
  }
}
