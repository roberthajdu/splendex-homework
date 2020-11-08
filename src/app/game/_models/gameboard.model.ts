import { Card } from "./card.model";

export class GameBoard {

    public tries;
    public boardSize;
    public cards: Card[] = [];

    constructor(size: number) {
        this.tries = 0;
        this.boardSize = size;
    }

    public shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }
}