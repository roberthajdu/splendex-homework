import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { GameboardComponent } from './gameboard/gameboard.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: '', component: GameComponent },
];


@NgModule({
  declarations: [GameComponent, CardComponent, GameboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GameModule { }
