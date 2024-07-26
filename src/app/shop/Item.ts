export class Item {
    private name: string;
    private price: number;
    private info: string;
    private timeoutInMs: number;
    private count: number = 0;

    constructor(name: string, price: number, timeoutInMs: number, info: string) {
        this.name = name;
        this.price = price;
        this.timeoutInMs = timeoutInMs;
        this.info = info;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getTimeoutInMs(): number {
        return this.timeoutInMs;
    }

    public getInfo(): string {
        return this.info;
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number): void { 
        this.count = count;
    }
}