import React from "react";

const ImageList = props => {
  const imageList = props.images.map(image => {
    return <li><img src={image.urls.small} /></li>;
  });
  return <ul style={{listStyleType:'none'}}>{imageList}</ul>;
};

export default ImageList;
