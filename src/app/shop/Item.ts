export class Item {
    private name: string;
    private price: number;
    private cps: number;
    private timeoutInMs: number;
    private count: number = 0;

    constructor(name: string, price: number, timeoutInMs: number, cps: number) {
        this.name = name;
        this.price = price;
        this.timeoutInMs = timeoutInMs;
        this.cps = cps;
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

    public getCps(): number {
        return this.cps;
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number): void { 
        this.count = count;
    }
}