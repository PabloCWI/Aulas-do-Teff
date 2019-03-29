import React, { Component } from 'react';
import GameComponent from './game.component';
import { players } from '../../constants/player.constants';
// import './tic-tac-toe.component.css';


class TicTacToeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moves: 0,
            board: Array(9).fill(null)
        }
    }

    switchPlayer() {

        if(this.state.moves === 0) {
            this.setState({ moves: this.state.moves + 1 })
        } else {
            this.setState({ moves: 0 })
        }

        console.log(this.state.moves);
    }

    recordMove(position) {
        
        const board = this.state.board.slice();
        
        if(this.state.moves === 0) {
            board[position] = 'X'
        } else {
            board[position] = 'O'
        }

        this.setState({ board })

        this.checkVictory(board, this.state.moves);

        this.switchPlayer();

    }

    endGame(player) {
        console.log('Victory!!! player ' + player)

    }

    checkVictory(board, moves) {
        
        const {playerX, playerO} = players;

        if(board[0] === playerX && board[1] === playerX && board[2] === playerX) { this.endGame(playerX)}
        if(board[3] === playerX && board[4] === playerX && board[5] === playerX) { this.endGame(playerX)}
        if(board[6] === playerX && board[7] === playerX && board[8] === playerX) { this.endGame(playerX)}
        if(board[0] === playerX && board[4] === playerX && board[8] === playerX) { this.endGame(playerX)}
        if(board[2] === playerX && board[4] === playerX && board[6] === playerX) { this.endGame(playerX)}
        if(board[0] === playerX && board[3] === playerX && board[6] === playerX) { this.endGame(playerX)}
        if(board[1] === playerX && board[4] === playerX && board[7] === playerX) { this.endGame(playerX)}
        if(board[2] === playerX && board[5] === playerX && board[8] === playerX) { this.endGame(playerX)}

        if(board[0] === playerO && board[1] === playerO && board[2] === playerO) { this.endGame(playerO)}
        if(board[3] === playerO && board[4] === playerO && board[5] === playerO) { this.endGame(playerO)}
        if(board[6] === playerO && board[7] === playerO && board[8] === playerO) { this.endGame(playerO)}
        if(board[0] === playerO && board[4] === playerO && board[8] === playerO) { this.endGame(playerO)}
        if(board[2] === playerO && board[4] === playerO && board[6] === playerO) { this.endGame(playerO)}
        if(board[0] === playerO && board[3] === playerO && board[6] === playerO) { this.endGame(playerO)}
        if(board[1] === playerO && board[4] === playerO && board[7] === playerO) { this.endGame(playerO)}
        if(board[2] === playerO && board[5] === playerO && board[8] === playerO) { this.endGame(playerO)}
    }

    render(){
        return (<GameComponent board={this.state.board} recordMove={(idx) => this.recordMove(idx)} player={this.state.moves}></GameComponent>);
    }
}





export default TicTacToeComponent;