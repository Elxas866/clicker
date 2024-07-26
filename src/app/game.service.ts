import { Injectable } from '@angular/core';
import { Item } from './shop/Item';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public score: number = 0;

  constructor() { }

  enableItem(item: Item): void {
    setInterval(() => {
      this.score++;
    }, item.getTimeoutInMs());
  }
}
