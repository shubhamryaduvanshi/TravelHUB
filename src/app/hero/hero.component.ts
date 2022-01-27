import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }





  images = [
    { path: 'assets/george-cerny-YfTxKql9vDU-unsplash.jpg' },
    { path: 'assets/laurent-jollet-k9Dw_K1ZIwA-unsplash.jpg' },
    { path: 'assets/paul-vhZe9fd9MRs-unsplash.jpg' },
    { path: 'assets/silver-ringvee-Q6F08X4Okd8-unsplash.jpg' },
    {path: 'assets/download.jpg'}
  ];

}
