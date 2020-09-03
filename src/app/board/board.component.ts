import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: String[];
  turn: String;
  winner: String; 
  winningSquares: Number[];

  constructor() { }

  ngOnInit(): void {
    this.newGame('');
  }

  newGame(first) {
    this.squares = Array(9).fill(null); 
    this.winner = '';
    first == '' ? this.turn = 'Click to Start!' : this.turn = first;
  }

  // get player() {
  //   return this.turn;
  // }

  fillSquare(index: number) {
    if(!this.squares[index]) {
      this.squares[index] = this.turn;
      this.turn == 'X' ? this.turn = 'O' : this.turn = 'X';
    }

    this.winningSquares = this.checkWinner();

    if(this.winningSquares) {

      this.turn == 'X' ? this.winner = 'O' : this.winner = 'X';
    }
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
        let winningArray = [a, b, c];
          return winningArray; 
        }
    }
    return null;
  }

}
