import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './../app/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const routes: Routes = [
  {
    path: 'play', loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  { path: '', redirectTo: 'play', pathMatch: 'full' }//component: LandingPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
