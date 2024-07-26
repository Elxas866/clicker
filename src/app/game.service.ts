import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _score: number = 0;

  constructor() { }

  get score(): number {
    return this._score;
  }

  incrementScore(): void {
    this._score++;
  }

  resetScore(): void { 
    this._score = 0;
  }
}
