import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero status="primary" *ngIf="!value">
      {{ value }}
    </button>
    <button nbButton hero status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>

  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important}',
  ]
})
export class SquareComponent {
  // rando;
  // constructor() {
    // setInterval(() => this.rando = Math.floor(Math.random()*14 + 1), 2000);
  // } 

  @Input() value: 'X' | 'O'; 
  @Input() winningSquares: Number[];

}
