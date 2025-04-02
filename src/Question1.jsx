import React, { Component } from 'react';

class Question1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alex'
        };

        // Binding the method to ensure 'this' refers to the component
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: 'Charlie' }); // Correcting the way to change state
    }

    render() {
        return (
            <div>
                <h3>User Profile</h3>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default Question1;
