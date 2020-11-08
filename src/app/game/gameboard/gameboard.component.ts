import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../_models/card.model';
import { GameService } from "./../game.service";
@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  @Input() size: number;

  constructor(public readonly gameService: GameService) {
  }

  ngOnInit(): void {
  }

  onFlip(card: Card) {
    this.gameService.setCardFlipped(card);
  }

}
