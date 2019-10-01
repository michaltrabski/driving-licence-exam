import React, { Component } from "react";

const path = "https://poznaj-testy.pl/wp-content/uploads/media/";
const emptyImage = "empty.jpg";

class Media extends Component {
  state = {
    isLoaded: false
  };

  playVideo = () => {
    console.log("playVideo");
    this.refs.video.play();
  };

  render() {
    let isVideo = false;
    let { m: media } = this.props;
    media = media.toString();

    if (media.indexOf(".wmv") > -1) {
      media = media.replace(".wmv", ".mp4");
      isVideo = true;
    }

    if (media === "") media = emptyImage;
    return isVideo ? (
      <>
        {this.state.isLoaded ? "loaded" : "not loaded"}
        <video
          id="video"
          ref="video"
          src={path + media}
          controls
          // autoPlay
          onCanPlayThrough={() => this.playVideo()}
          // onLoad={playVideo}
        />
        <button onClick={this.playVideo}>play</button>
      </>
    ) : (
      <>
        <img
          src={path + media}
          alt="obraz"
          // onLoad={console.log("2 image loaded")}
        />
      </>
    );
  }
}

export default Media;
