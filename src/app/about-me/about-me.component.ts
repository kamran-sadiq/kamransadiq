import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".owl-carousel").owlCarousel();
  }

}
