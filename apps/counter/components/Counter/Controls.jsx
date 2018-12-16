import React from 'react';
import './counter.css';

const Controls = ({ onAdd, onRemove }) => (
  <div className="controls">
    <button onClick={onAdd}>Add</button>
    <button onClick={onRemove}>Remove</button>
  </div>
);

export default Controls;
