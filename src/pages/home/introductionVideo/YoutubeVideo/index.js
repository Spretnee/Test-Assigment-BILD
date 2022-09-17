import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
