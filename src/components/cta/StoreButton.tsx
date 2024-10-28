import * as React from "react";

interface StoreButtonProps {
  imageSrc: string;
  imageAlt: string;
  width: string;
  imageWidth: string;
  imageAspect: string; // e.g., "1/1" for square, "16/9" for widescreen, etc.
}

export const StoreButton: React.FC<StoreButtonProps> = ({
  imageSrc,
  imageAlt,
  width,
  imageWidth,
  imageAspect,
}) => (
  <div
    className={`flex flex-col justify-center p-4 bg-gray-700 rounded-2xl ${width} transition-transform duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-600 shadow-md hover:shadow-lg`}
  >
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className={`object-contain max-w-full ${imageWidth}`}
      style={{ aspectRatio: imageAspect }} // Apply aspect ratio using inline style
    />
  </div>
);
