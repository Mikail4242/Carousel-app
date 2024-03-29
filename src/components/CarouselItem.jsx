import React from "react";
import "./CarouselMobile.css";

const CarouselItem = ({ src, alt }) => {
	return <img className="item" src={src} alt={alt} />;
};

export default CarouselItem;
