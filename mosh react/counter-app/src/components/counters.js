import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2, isVisible: true },
      { id: 2, value: 0, isVisible: true },
      { id: 3, value: 9, isVisible: true },
      { id: 4, value: 1, isVisible: true }
    ]
  };

  handleDelete = id => {
    console.log("handle", id);
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
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
