interface TransPort {
    deliver(): void;
}


class Logistic {

    planDelivery() {

    }
}

class RailLogistic extends Logistic {
    createTransport(): TransPort {
        return new Truck()
    }
}

class ShipLogistic extends Logistic {
    createTransport() : TransPort {
        return new Ship()
    }
}


class Truck implements TransPort {
    deliver(): void {
        
    }
}

class Ship implements TransPort {
    deliver(): void {
        
    }
}