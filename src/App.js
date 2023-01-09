import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <button className="counter" onClick={this.increment}>
          increment
        </button>
        <button className="counter" onClick={this.decrement}>
          decrement
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
