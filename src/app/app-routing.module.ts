import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './PictureBoard/emotions/emotions.component';
import { HomeComponent } from './Home/home/home.component';
import { PicboardComponent } from './PictureBoard/picboard/picboard.component';
import { GroceryComponent } from './PictureBoard/grocery/grocery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TourismComponent } from './PictureBoard/tourism/tourism.component';
import { SocialComponent } from './PictureBoard/social/social.component';
import { FestivalsComponent } from './PictureBoard/festivals/festivals.component';
import { VoiceComponent } from './voice/voice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'picboard', component: PicboardComponent },
  { path: 'emotions', component: EmotionsComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'social', component: SocialComponent },
  { path: 'festivals', component: FestivalsComponent },
  { path: 'voice', component: VoiceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
