import React, { Component } from "react";

const path = "https://poznaj-testy.pl/wp-content/uploads/media/";
const emptyImage = "empty.jpg";

class Media extends Component {
  state = {
    isLoaded: false
  };

  playVideo = () => {
    this.refs.video.play();
  };

  mediaLoaded = massage => {
    // console.log(massage);
    this.props.handleMediaReady();
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
        <video
          className="w-100 border"
          ref="video"
          src={path + media}
          controls
          onCanPlayThrough={() => this.mediaLoaded("video loaded")}
        />
        {/* <button onClick={this.playVideo}>play</button> */}
      </>
    ) : (
      <img
        className="w-100 border"
        src={path + media}
        alt="obraz"
        onLoad={() => this.mediaLoaded("image loaded")}
      />
    );
  }
}

export default Media;
