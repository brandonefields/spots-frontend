import React, { Component } from 'react';

const initialState = {
    name: "",
    breed: "",
    bitehistory: false
}

export default class DogForm extends Component {

    state = initialState

    render() {
        return (
            <form className="dog-form">
                <h2>Add A New Doggie</h2>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Breed</label>
                <input type="text" name="breed" />
                <label>Color</label>
                <input type="text" name="color" />
                <label>Bite History</label>
                <input type="checkbox" name="bitehistory" />
                <input type="submit" />
            </form>
        );
    }
}

