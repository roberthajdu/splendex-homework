export class Card {
    public id: number;
    public flipped: boolean;
    public found: boolean = false;

    constructor(cardId: number) {
        this.id = cardId;
        this.flipped = false;
    }
}