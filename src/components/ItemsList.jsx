import React, { Component } from 'react';
import {connect} from 'react-redux';

import Item from './Item';

import * as actions from '../actions/';

class ItemsList extends Component {

  constructor(props) {
    super(props);

    //event binding this later

  }

  renderItems() {
    return this.props.items.map((item)=>{
      return (
        <Item {...item} key={item.id} />
      );
    });
  }

  render() {
    return (
      <div className="itemlist">
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(ItemsList);
