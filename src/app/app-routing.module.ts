import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './PictureBoard/emotions/emotions.component';

const routes: Routes = [
  {path:'Emotions',component:EmotionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
