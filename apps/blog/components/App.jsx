import React from 'react';
import Header from './Header';
import Feed from './Feed';

const sortTypes = [
  { name: 'Date Created', value: 'created' },
  { name: 'Likes', value: 'votes' },
  { name: 'Author', value: 'username' }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingBy: 0
    };

    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort() {
    const max = sortTypes.length - 1;
    const next = this.state.sortingBy + 1;
    if (next > max) {
      this.setState({
        sortingBy: 0
      });
    } else {
      this.setState({
        sortingBy: next
      });
    }
  }

  render() {
    return (
      <div>
        <Header 
          sortTypes={sortTypes} 
          onSort={this.toggleSort} 
          sortingBy={this.state.sortingBy} 
        />
        <Feed sortTypes={sortTypes} sortingBy={this.state.sortingBy} />
      </div>
    )
  }
}

export default App;
