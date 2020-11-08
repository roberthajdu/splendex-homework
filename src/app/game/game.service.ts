import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { GameboardComponent } from './gameboard/gameboard.component';
import { Card } from './_models/card.model';
import { GameBoard } from './_models/gameboard.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameBoardSize: number = 10;
  gameBoard: GameBoard;

  firstCard: Card;
  secondCard: Card;

  constructor() { }

  public createNewBoard(): void {
    if (localStorage.getItem('myboard')) {
      this.gameBoard = Object.assign(new GameBoard(0), JSON.parse(localStorage.getItem('myboard')));
    } else {
      this.gameBoard = new GameBoard(this.gameBoardSize);
      for (let i = 1; i <= this.gameBoardSize; i++) {
        this.gameBoard.cards.push(new Card(i));
        this.gameBoard.cards.push(new Card(i));
      }
      this.gameBoard.shuffle();
    }
  }

  public getBoardCards(): Card[] {
    if (!this.gameBoard) {
      this.createNewBoard();
    }
    return this.gameBoard.cards;
  }

  setCardFlipped(card: Card): void {

    if (this.firstCard && !this.secondCard) {
      this.gameBoard.addTry();
      this.secondCard = card;
      if (this.firstCard.id === this.secondCard.id) {
        this.firstCard.found = true;
        this.secondCard.found = true;
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.gameBoard.removePairs();
      } else {
        this.secondCard.flipped = true;
      }
    } else if (this.firstCard && this.secondCard) {
      this.secondCard.flipped = false;
      delete this.secondCard;
      this.firstCard.flipped = false;
      delete this.firstCard;
      this.firstCard = card;
      this.firstCard.flipped = true;
    } else {
      console.log('this scenario');
      this.firstCard = card;
      this.firstCard.flipped = true;
    }
    localStorage.setItem('myboard', JSON.stringify(this.gameBoard));
    console.log(this.gameBoard);
  }

  restart() {
    localStorage.removeItem('myboard');
    this.createNewBoard();
  }
}
