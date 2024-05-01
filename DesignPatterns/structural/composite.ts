interface IProduct {
    getPrice(): number;
}

class Product {
    price: number;
    constructor(price: number) {
        this.price = price;
    }
    getPrice(): number {
        return this.price;
    }
}

class Order implements IProduct {
    products: Product[];

    getPrice(): number {
        let price = 0;
        for(let i = 0; i < this.products.length; i++ ) {
            price += this.products[i].getPrice();
        }
        return price;
    }
}