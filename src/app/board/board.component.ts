import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: String[];
  turn: String;
  winner: String; 

  constructor() { }

  ngOnInit(): void {
    this.newGame('X');
  }

  newGame(first) {
    this.squares = Array(9).fill(null); 
    this.winner = '';
    first == 'X' ? this.turn = 'X' : this.turn = 'O';
  }

  // get player() {
  //   return this.turn;
  // }

  fillSquare(index: number) {
    if(!this.squares[index]) {
      this.squares[index] = this.turn;
      this.turn == 'X' ? this.turn = 'O' : this.turn = 'X';
    }

    this.winner = this.checkWinner();
  }

  checkWinner() {
    const lines = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[b] == this.squares[c]) {
          return this.squares[a];
        }
    }
    return null;
  }

}
