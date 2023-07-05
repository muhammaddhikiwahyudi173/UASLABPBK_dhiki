<template>
    <div class="tic-tac-toe-widget">
      <h2>Program Game TicTacToe</h2>
      <div class="board">
        <div v-for="(cell, index) in board" :key="index" @click="handleClick(index)">{{ cell }}</div>
      </div>
      <button @click="resetGame" class="tmblulang">Ulang Permainan</button>
      <p>{{ status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: 'Y',
        isGameEnded: false,
      };
    },
    computed: {
      status() {
        if (this.isGameEnded) {
          return 'Game Telah Berakhir';
        }
        return `Giliran Pemain '${this.currentPlayer}' untuk Memulai`;
      },
    },
    methods: {
      handleClick(index) {
        if (!this.isGameEnded && this.board[index] === '') {
          this.board[index] = this.currentPlayer;
          this.checkWinner();
          this.currentPlayer = this.currentPlayer === 'Y' ? 'N' : 'Y';
        }
      },
      checkWinner() {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6], // Diagonals
        ];
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
            this.isGameEnded = true;
            return;
          }
        }
      },
      resetGame() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'Y';
        this.isGameEnded = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .tic-tac-toe-widget {
    border: 3px solid #666;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
  }
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
    ;
  }
  .board div {
    border: 1px solid blue;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
  }
  .tmblulang {
    margin-top: 10px;
    border-radius: 8px;
    background-color: aquamarine;
    color: black;
    height: 30px;
    width: 150px;
    cursor: pointer;
    transition: color 0.5s ease;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-width: 1.8px;
  }
  .tmblulang:hover{
    background-color: burlywood;
    transition: background-color 0.7s ease;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
  }
  </style>