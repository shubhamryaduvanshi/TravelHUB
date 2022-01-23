import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-features-component',
  templateUrl: './features-component.component.html',
  styleUrls: ['./features-component.component.scss']
})
export class FeaturesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  option0: AnimationOptions = {
    path:'https://assets4.lottiefiles.com/private_files/lf30_ivxd3e51.json'
  }
  option1: AnimationOptions = {
    path: 'https://assets4.lottiefiles.com/private_files/lf30_fw6h59eu.json',  
  };



  features=[
    {
      imageURL:'Easy to use',
      content:'Check out  new features for your quick & easy train ticket booking status!'
    },
    {
      imageURL:'Easy to use',
      content:'A single click to search trains and get their details.',
      upcomingFeature:'Ticket booking -',
      upcomingLable:'comming soon',

    },
  ]

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
