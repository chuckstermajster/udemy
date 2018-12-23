import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2, isVisible: true },
      { id: 2, value: 0, isVisible: true },
      { id: 3, value: 9, isVisible: true },
      { id: 4, value: 1, isVisible: true }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = id => {
    const countersToKeep = this.state.counters.filter(
      counter => id !== counter.id
    );

    this.setState({
      counters: countersToKeep
    });
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
