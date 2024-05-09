class User1 {
    id: number;
    email: string;

}

class MoveHistory {

}

class Game {
    id: number;
    players: User1[];
    PlayerBoxMapping: Map<User1, Box>;
    status: string;
    winner: User1;

    makeMove() {

    }

    isValidMove() {

    }

    isWinningMove() {

    }
}

class GameBoard {
    boxes: Box[][] = [];

    constructor() {
        // Initalize Box
    }

    getDesitnationPosition() {

    }
}


class Box {
    snakeTell: Box | null;
    ladder: Box | null;
    boxCode: number;

    constructor(snakeTesll: Box | null, ladder: Box | null, boxCode: number) {
        this.snakeTell = snakeTesll || null;
        this.ladder = snakeTesll || null;
        this.boxCode = boxCode;
    }
}

class Dice {

    static rollTheDice() {
        
    }
}
