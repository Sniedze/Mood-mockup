import React from "react";

const ImageComponent = ({
  image,
  height,
  width,
  alt,
  className,
  backgroundClass,
}) => {
  return (
    <div className={backgroundClass}>
      <img
        priority
        src={image}
        className={className}
        height={height}
        width={width}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
