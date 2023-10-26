import Image, {StaticImageData} from "next/image";
import React, {useState, useEffect} from "react";
import {LazyImage} from "../../common/images/LazyImage";

interface IProps {
  imageUrl: string | StaticImageData
  alt: string
  objectCover?: boolean
  width ?: number
  mdwidth?: number
}
export const CarouselImageItem = ({imageUrl, alt, objectCover, width, mdwidth}: IProps) => {

  console.log(width);

  return (
    <figure className={`mx-1 min-w-[${width || 150}px] md:min-w-[${mdwidth || 250}px]`}>
      <LazyImage className={`${objectCover && "object-cover"}`} imageUrl={imageUrl} alt={alt} width={150} height={110} />
    </figure>
  );
};