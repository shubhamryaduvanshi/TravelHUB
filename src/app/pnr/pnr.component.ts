import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.scss']
})
export class PNRComponent implements OnInit {

  constructor(public service: CommonServiceService) { }

  ngOnInit(): void {
  }

  public myMath = Math;

  pnrData: any;
  pnrLoader:boolean=false;

  option0: any = {
    path:'https://assets10.lottiefiles.com/packages/lf20_fyye8szy.json'
  }

  getUserValue(data: any) {
    this.pnrLoader=true;
    this.service.getPNRStatus(data.pnrNumber).subscribe(d => {
      this.pnrData = d;
      this.pnrLoader=false;
    });
  }


  

}
