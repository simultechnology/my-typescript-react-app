import * as React from 'react';

type SquareType = string | null;

interface ISquareProps {
    value: string | null;
    onClick: () => void;
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
    }

    public render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }

}

export { SquareType, Square }
