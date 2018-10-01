import React, { Component } from 'react';


class MediaCard extends Component {
  constructor() {
    super();
  }
  render() {
    const { messages } = this.props;
    let media, chips;
    messages.forEach(msg => {
      if (msg.type === "media_content") {
        media = msg;
      } else if (msg.type === "suggestion_chips") {
        chips = msg;
      }
    })

    return (
      <div>
        {media.mediaObjects &&
          <div>
            <h5>{media.mediaObjects[0].name}</h5>
            <audio controls>
              <source src={media.mediaObjects[0].contentUrl} type="audio/mp3" />
            </audio>
          </div>
        }
        {chips && chips.suggestions.map(chip => {
          return (
            <button onClick={() => this.props.listDescription(chip.title)}>{chip.title}</button>
          )
        })}
      </div>
    );
  }
}


export default MediaCard;
