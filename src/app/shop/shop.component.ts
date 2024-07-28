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
  cpsSum = 0;

  constructor(public gameService: GameService, private shopService: ShopService) {}

  buyItem(item: Item): void {
    if (this.gameService.score >= item.getPrice()) {
      this.gameService.score -= item.getPrice();
      this.gameService.enableItem(item);
      item.setCount(item.getCount() + 1);
      this.cpsSum += item.getCps();
    }
  }

  restartGame(): void {
    // reload the page after confirmation
    let ans = confirm('Are you sure you want to restart the game?');
    if (ans) window.location.reload();
  }
}
