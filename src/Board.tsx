import * as React from 'react';
import {Square, SquareType} from './Square';

interface IBoardState {
    squares: SquareType[];
}

class Board extends React.Component<any, IBoardState>  {
    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
        // this.handleClick = this.handleClick.bind(this)
    }

    public render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    private handleClick(i: number) {
        console.log(i);
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares});
    }

    private renderSquare(i: number) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
}

export default Board
