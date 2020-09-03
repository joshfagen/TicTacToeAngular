import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em; }',
  ]
})
export class SquareComponent {
  // rando;
  // constructor() {
    // setInterval(() => this.rando = Math.floor(Math.random()*14 + 1), 2000);
  // } 

  @Input() value: 'X' | 'O'; 

}
