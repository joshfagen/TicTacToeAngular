import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: [
    
  ]
})
export class SquareComponent {
  // rando;
  // constructor() {
    // setInterval(() => this.rando = Math.floor(Math.random()*14 + 1), 2000);
  // } 

  @Input() value: 'X' | 'O'; 

}
