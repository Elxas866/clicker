import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { ShopService } from '../shop.service';
import { Item } from './Item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  items = this.shopService.getItems();
  autoclickers = this.gameService.autoclickers;

  constructor(public gameService: GameService, private shopService: ShopService) {}

  buyItem(item: Item): void {
    if (this.gameService.score >= 10) {
      this.gameService.score -= 10;
    }
    this.gameService.enableItem(item);
    this.autoclickers = this.gameService.autoclickers;
  }
}
