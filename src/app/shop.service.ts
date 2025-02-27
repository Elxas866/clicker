import { Injectable } from '@angular/core';
import { Item } from './shop/Item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private items: Item[] = [
    new Item('Autoclicker V1', 10, 1000, 1),
    new Item('Autoclicker V2', 100, 500, 2),
    new Item('Autoclicker V3', 1000, 250, 4),
    new Item('Autoclicker V4', 10000, 125, 8),
  ];

  constructor() { }

  public getItems(): Item[] {
    return this.items;
  }
}
