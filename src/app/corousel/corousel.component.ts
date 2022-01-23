import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CorouselComponent implements OnInit {
  constructor(config: NgbCarouselConfig) { 
  }
  ngOnInit(): void {
  }
  images = [
    'https://media.wired.com/photos/593356b495879f6d0c00b3a7/master/w_2560%2Cc_limit/3448678338_e8785110ff_b-660.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/steam-train-rides-1570200690.jpg?crop=0.668xw:1.00xh;0.109xw,0&resize=640:*',
    'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/mukixvmfj5jbmeht_1624092050.jpeg',
  ];

}
