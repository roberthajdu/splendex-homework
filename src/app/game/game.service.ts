import { Injectable } from '@angular/core';
import { GameboardComponent } from './gameboard/gameboard.component';
import { Card } from './_models/card.model';
import { GameBoard } from './_models/gameboard.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameBoardSize: number = 10;
  gameBoard: GameBoard;

  flippedCard: Card;

  constructor() { }

  public createNewBoard(): void {
    this.gameBoard = new GameBoard(this.gameBoardSize);
    for (let i = 1; i <= this.gameBoardSize; i++) {
      this.gameBoard.cards.push(new Card(i));
      this.gameBoard.cards.push(new Card(i));
    }
    this.gameBoard.shuffle();
  }

  public getBoardCards(): Card[] {
    if (!this.gameBoard) {
      this.createNewBoard();
    }
    return this.gameBoard.cards;
  }

  setCardFlipped(card: Card): void {
    if (this.flippedCard) {
      if (card.id === this.flippedCard.id) {
        card.found = true;
        this.flippedCard.found = true;
      } else {
        this.flippedCard = undefined;
      }
    } else {
      card.flipped = true;
      this.flippedCard = card;
    }
  }
}
