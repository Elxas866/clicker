import { Injectable } from '@angular/core';
import { Item } from './shop/Item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private items: Item[] = [
    new Item('Autoclicker', 10, 1000, '+1 CPS'),
    new Item('Autoclicker V2', 100, 500, '+2 CPS'),
  ];

  constructor() { }

  public getItems(): Item[] {
    return this.items;
  }
}
