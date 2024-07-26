export class Item {
    private name: string;
    private price: number;
    private info: string;

    constructor(name: string, price: number, info: string) {
        this.name = name;
        this.price = price;
        this.info = info;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getInfo(): string {
        return this.info;
    }
}