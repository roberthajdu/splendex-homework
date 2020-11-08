import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: '', component: GameComponent },
];


@NgModule({
  declarations: [GameComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GameModule { }
