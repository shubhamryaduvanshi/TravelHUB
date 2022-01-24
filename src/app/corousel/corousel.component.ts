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
    'assets/george-cerny-YfTxKql9vDU-unsplash.jpg',
    'assets/laurent-jollet-k9Dw_K1ZIwA-unsplash.jpg',
    'assets/paul-vhZe9fd9MRs-unsplash.jpg',
    'assets/silver-ringvee-Q6F08X4Okd8-unsplash.jpg',
    'assets/download.jpg'
  ];

}
