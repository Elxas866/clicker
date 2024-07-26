import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  isClicked = false;

  constructor(public gameService: GameService) {}

  onButtonClick(): void { 
    this.gameService.incrementScore();
    this.animateButton();
  }

  animateButton(): void {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 100);
  }

  resetScore(): void { 
    this.gameService.resetScore();
  }
}
