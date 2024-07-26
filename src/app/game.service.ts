import { Injectable } from '@angular/core';
import { Item } from './shop/Item';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public score: number = 0;
  public autoclickers: number = 0;

  constructor() { }

  enableItem(item: Item): void {
    switch (item.getName()) { 
      case 'Autoclicker':
        this.enableAutoclicker();
        break;
    }
  }

  enableAutoclicker(): void {
    setInterval(() => {
      this.score++;
    }, 1000);
    this.autoclickers++;
  }
}
