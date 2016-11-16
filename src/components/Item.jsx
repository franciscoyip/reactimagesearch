import React, { Component } from 'react';

class Item extends Component {

  constructor(props) {
    super(props);

    //event binding this later
    this.imageOnLoad = this.imageOnLoad.bind(this);

  }

  imageOnLoad() {
    this.refs.image.className = 'img-loading img-loaded';
  }

  render() {

    return (
      <div className="item">
        <img src={this.props.small_thumb.url}
          onLoad={this.imageOnLoad}
          className='img-loading' ref="image"/>
      </div>
    );
  }

}

export default Item;
