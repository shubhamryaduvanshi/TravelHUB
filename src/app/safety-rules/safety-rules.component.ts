import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-safety-rules',
  templateUrl: './safety-rules.component.html',
  styleUrls: ['./safety-rules.component.scss']
})
export class SafetyRulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  option1: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_ayk6t8xd.json',
  };

  option2: AnimationOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_p2evb1ab.json',
  };

  option3: AnimationOptions = {
    path:'https://assets2.lottiefiles.com/packages/lf20_tbwqrxnz.json'
  }

  animationCreated(animationItem: AnimationItem): void {
  }
}
