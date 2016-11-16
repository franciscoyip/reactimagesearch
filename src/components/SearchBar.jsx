import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    //event binding this later
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //dispatch action here
    this.props.dispatch(actions.setTerm(this.textInput.value));
    this.props.dispatch(actions.fetchData());
  }

  render() {
    return (
      <div>
        <h1>Find an Image</h1>
        <form onSubmit={this.handleSubmit}>
          <div><input ref={(input) => this.textInput = input}/></div>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default connect()(SearchBar);
