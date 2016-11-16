import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ItemsList from './ItemsList';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <ItemsList />
      </div>
    );
  }
}
