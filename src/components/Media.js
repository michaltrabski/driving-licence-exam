import React from "react";
import styled from "styled-components";

const Video = styled.video`
  padding: 0.25rem;

  max-width: 100%;
  height: auto;
`;

const Image = styled.img`
  padding: 0.25rem;

  max-width: 100%;
  height: auto;
`;

const Media = ({ m: media }) => {
  const path = "https://poznaj-testy.pl/wp-content/uploads/media/";
  let isVideo = false;

  if (media.toString().indexOf(".wmv") > -1) {
    media = media.toString().replace(".wmv", ".mp4");
    isVideo = true;
  }

  if (media === "") media = "empty.jpg";

  if (isVideo) {
    return (
      <Video controls>
        <source src={path + media} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    );
  } else {
    return <Image src={path + media} alt="image" />;
  }
};

export default Media;
