export class Card {
    private id: number;
    private flipped: boolean;

    constructor(cardId: number) {
        this.id = cardId;
        this.flipped = false;
    }
}