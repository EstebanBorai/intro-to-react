import React from 'react';
import './counter.css';
import Controls from './Controls';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd() {
    this.setState({
      value: this.state.value + 1
    });
  }

  onRemove() {
    this.setState({
      value: this.state.value - 1
    });
  }

  render() {
    return (
      <li className="counter">
        <div className="counter-body">
          <h3>{this.props.title}</h3>
          <span>{this.state.value}</span>
          <Controls onAdd={this.onAdd} onRemove={this.onRemove}/>
        </div>
      </li>
    )
  }
}

export default Counter;
