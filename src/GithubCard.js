import React, { Component } from 'react';

class GithubCard extends Component {
    state = {};

    componentDidMount = function () {
        var component = this;
        window.$.get("https://api.github.com/users/" + this.props.login, function (result) {
            component.setState({
                user: result
            });
        });
    };

    render = () => {
        let renderedContent = null;
        var user = this.state.user;
        if (!user) {
            renderedContent = <div>user not found</div>
        }
        else {
            renderedContent = (
                <div>
                    <img src={user.avatar_url} alt="avatar" width="80" />
                    <h4>{user.name}</h4>
                    <a href={user.html_url}>{user.html_url}</a>
                </div>)
        }
        return (
            <div>
                <h3>User {this.props.login}</h3>
                {renderedContent}
                <hr />
            </div>
        );
    }
}

class SearchGithubUserForm extends Component {
    handleSubmit = (evt) => {
        evt.preventDefault();
        var loginInput = this.refs.login;
        this.props.addCard(loginInput.value);
        this.refs.login.value = null;
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="github login" ref="login" />
                <button>Add</button>
            </form>
        );
    }
}

class GithubCardSummary extends Component {
    state = { logins: [] };
    addCard = (loginToAdd) => {
        this.setState({
            logins: this.state.logins.concat(loginToAdd)
        })
    };

    render = () => {
        var cards = this.state.logins.map(function (login) {
            return (<GithubCard login={login} key={login} />);
        });

        return (
            <div>
                <h2>Github users</h2>
                <SearchGithubUserForm addCard={this.addCard} />
                {cards}
            </div>
        );
    }
}

export default GithubCardSummary;
