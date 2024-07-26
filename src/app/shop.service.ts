import { Injectable } from '@angular/core';
import { Item } from './shop/Item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private items: Item[] = [
    new Item('Autoclicker', 10, '+1 CPS')
  ];

  constructor() { }

  public getItems(): Item[] {
    return this.items;
  }
}
