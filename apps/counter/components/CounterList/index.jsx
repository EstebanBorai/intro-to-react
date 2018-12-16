import React from 'react';
import './counter-list.css';
import Counter from '../Counter';

class CounterList extends React.Component {
  render() {
    return (
      <ul className="counter-list">
        <Counter title="Counter" />
      </ul>
    );
  }
}

export default CounterList;
