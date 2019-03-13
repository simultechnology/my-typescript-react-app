import * as React from 'react';

interface ISquareProps {
    value: number;
}

interface ISquareState {
    value: string | null;
}

class Square extends React.Component<ISquareProps, ISquareState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
        };
        this.handleClick = this.handleClick.bind(this)
    }

    public render() {
        return (
            <button className="square" onClick={this.handleClick}>
                {this.state.value}
            </button>
        );
    }

    private handleClick() {
        console.log(this);
        this.setState({value: 'X'})
    }

}

export default Square