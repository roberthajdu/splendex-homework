import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../_models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Output() flip: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  checkFlip(card) {
    if (!card.flipped) {
      this.flip.emit(card);
    }
  }
}
