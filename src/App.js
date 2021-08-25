import { Component } from 'react';
import './App.css';
import DogsContainer from './Components/DogsContainer';
import DogForm from './Components/DogForm';


const dogsURL = "http://localhost:3000/dogs"

class App extends Component {

  state = {
    dogs: [],
    selectedDogs: []
  }

  componentDidMount(){
    this.getDogs()
  }

  getDogs = () => {
    fetch(dogsURL)
      .then(res => res.json() )
      .then(dogs => this.setState({dogs}))
  }

  render() {
    return (
      <div className="App">
        <h1>Pakx</h1>
        <DogForm />
        <DogsContainer dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;
