import React, { Component } from 'react';

class MyCounterButton extends Component {
    handleClick = () => {
        this.props.onClick(this.props.operator, this.props.operand);
    };

    render() {
        return (<button onClick={this.handleClick}>{this.props.operator}{this.props.operand}</button>);
    }
}
const MyCounterResult = (props) => (
    <div>{props.counter}</div>
);

class MyCounter extends Component {
    state = { counter: 0 };
    supportedOperations = {
        "+": (counter, operand) => counter + operand,
        "-": (counter, operand) => counter - operand,
        "*": (counter, operand) => counter * operand
    };
    updateCounter = (operator, operand) => {
        const newCounter = this.supportedOperations[operator](this.state.counter, operand);

        this.setState({
            counter: newCounter
        });
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <MyCounterButton onClick={this.updateCounter} operand={1} operator="+" />
                <MyCounterButton onClick={this.updateCounter} operand={5} operator="-" />
                <MyCounterButton onClick={this.updateCounter} operand={10} operator="*" />
                <MyCounterResult counter={this.state.counter} />
            </div>);
    }
}

export default MyCounter;
