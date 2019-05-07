import React from "react";

const ImageList = props => {
  const imageList = props.images.map(image => {
    return (
      <li key={image.id}>
        <img src={image.urls.small} alt={image.alt_description} />
      </li>
    );
  });
  return <ul style={{ listStyleType: "none" }}>{imageList}</ul>;
};

export default ImageList;
