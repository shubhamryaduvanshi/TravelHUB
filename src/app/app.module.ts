import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CorouselComponent } from './corousel/corousel.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FeaturesComponentComponent } from './features-component/features-component.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SafetyRulesComponent } from './safety-rules/safety-rules.component';
import { FooterComponent } from './footer/footer.component';
import { PNRComponent } from './pnr/pnr.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CorouselComponent,
    FeaturesComponentComponent,
    SafetyRulesComponent,
    FooterComponent,
    PNRComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
