import React, { Component } from 'react';

class MyCounterButton extends Component {

    render() {
        return (<button onClick={this.props.onClick}>+1</button>);
    }
}
const MyCounterResult = (props) => (
    <div>{props.counter}</div>
);

class MyCounter extends Component {
    state = { counter: 0 };

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <div>
                <MyCounterButton onClick={this.incrementCounter} />
                <MyCounterResult counter={this.state.counter} />
            </div>);
    }
}

export default MyCounter;
