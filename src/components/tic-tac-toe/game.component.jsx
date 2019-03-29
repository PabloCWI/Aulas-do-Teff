import React from 'react'
import styled from 'styled-components';

class GameComponent extends React.Component {
    render() {
        return (
            <StyledGameContainer>
            <div className="victory"></div>
                <div className={"row-class"} style={{display: "block"}}>
                    <button onClick={() => this.props.recordMove(0)}>{this.props.board[0]}</button>
                    <button onClick={() => this.props.recordMove(1)}>{this.props.board[1]}</button>
                    <button onClick={() => this.props.recordMove(2)}>{this.props.board[2]}</button>
                </div>
                <div className={"row-class"} style={{display: "block"}}>
                    <button onClick={() => this.props.recordMove(3)}>{this.props.board[3]}</button>
                    <button onClick={() => this.props.recordMove(4)}>{this.props.board[4]}</button>
                    <button onClick={() => this.props.recordMove(5)}>{this.props.board[5]}</button>
                </div>
                <div className={"row-class"} style={{display: "block"}}>
                    <button onClick={() => this.props.recordMove(6)}>{this.props.board[6]}</button>
                    <button onClick={() => this.props.recordMove(7)}>{this.props.board[7]}</button>
                    <button onClick={() => this.props.recordMove(8)}>{this.props.board[8]}</button>
                </div>
            </StyledGameContainer>
        )
    }
}

const StyledGameContainer = styled.div`
    button {
    background: purple;
    color: cyan;
    height: 45px;
    width: 45px;
}
`  

export default GameComponent;