import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './PictureBoard/emotions/emotions.component';
import { HomeComponent } from './Home/home/home.component';
import { PicboardComponent } from './PictureBoard/picboard/picboard.component';
import { GroceryComponent } from './PictureBoard/grocery/grocery.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'picboard', component: PicboardComponent },
  { path: 'emotions', component: EmotionsComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'tourism', component: GroceryComponent },
  { path: 'social', component: GroceryComponent },
  { path: 'festivals', component: GroceryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
