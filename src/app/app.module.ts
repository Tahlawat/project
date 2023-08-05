import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselComponent } from './Home/carousel/carousel.component';
import { HomeComponent } from './Home/home/home.component';
import { EveryVoiceComponent } from './Home/every-voice/every-voice.component';
import { FeaturesComponent } from './Home/features/features.component';
import { TutorialComponent } from './Home/tutorial/tutorial.component';
import { PricingComponent } from './Home/pricing/pricing.component';
import { PicboardComponent } from './PictureBoard/picboard/picboard.component';
import { EmotionsComponent } from './PictureBoard/emotions/emotions.component';
import { GroceryComponent } from './PictureBoard/grocery/grocery.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    CarouselComponent,
    EveryVoiceComponent,
    FeaturesComponent,
    TutorialComponent,
    PricingComponent,
    PicboardComponent,
    EmotionsComponent,
    GroceryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
