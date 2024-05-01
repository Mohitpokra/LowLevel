class RoundHole {
    radius: number
    constructor(radius: number) {
        this.radius = radius;
    }

    isFitsInHole(roundPeg: RoundPeg) {
        if(this.radius > roundPeg.getRadius()) {
            return true;
        }
        return false;
    }

    
}

class RoundPeg  {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

}

class SquarePegAdapter extends RoundPeg {
    squarePeg: SquarePeg;
    getRadius(): number {
        return (Math.sqrt(2) * this.squarePeg.getWidth())/2;
    }
}


class SquarePeg {
    width: number;
    constructor(width: number) {
        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }
}