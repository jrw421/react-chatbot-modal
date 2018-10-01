import React, { Component } from 'react';


class BasicCard extends Component {
  constructor() {
    super();
  }
  render() {
    const { card } = this.props;
    return (
      <div>
        {card.title &&
          <h5> {card.title} </h5>
        }
        {card.image &&
          <img style={{ "width": "200px" }} src={card.image.url} />
        }

        {card.buttons && card.buttons.map(button => {
          return (
            <a key = {button.title} href={button.openUrlAction && button.openUrlAction.url} target="_blank"><button>{button.title}</button></a>
          )
        })}
      </div>
    );
  }
}


export default BasicCard;
