import React, { Component } from 'react';


class ListCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={() => this.props.listDescription(this.props.description)}>
        {this.props.description}
    </button>
    );
  }
}


export default ListCard;
