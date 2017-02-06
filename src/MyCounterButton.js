import React, { Component } from 'react';

class MyCounterButton extends Component {

    state = { counter: 0 };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (<button onClick={this.handleClick}>Counter: {this.state.counter}</button>);
    }
}

export default MyCounterButton;
