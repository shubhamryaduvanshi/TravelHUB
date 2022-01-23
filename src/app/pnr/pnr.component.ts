import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../common-service.service';
@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.scss']
})
export class PNRComponent implements OnInit {

  constructor(public service:CommonServiceService) { }

  ngOnInit(): void {
  }

  getUserValue(data:any){
    console.log(data);
    
  this.service.getPNRStatus(data.pnrNumber).subscribe(d=>{console.log(d)});
    
  }
}
