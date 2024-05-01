abstract class FurnitureFactory {
    abstract createChair(material: string): Chair;
}

class WoodenFurnitureFactory extends FurnitureFactory {
    createChair(material: string): Chair {
        return new Chair(material)
    }
}

class ItalianFurnitureFactory {
    createChair(material: string): Chair {
        return new Chair(material)
    }
}


class Chair {
    material: string
    constructor(material: string) {
        this.material = material;
    }
    makeChair() {

    }
}