import React from "react";
import CarouselDesktop from "./CarouselDekstop.jsx";
import CarouselMobile from "./CarouselMobile.jsx";
import { useMediaQuery } from "react-responsive";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";

const Carousel = () => {
	const images = [image1, image2, image3, image4, image5, image6];
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<div>
			<h1>Infinite Image Carousel</h1>
			{isMobile ? (
				<CarouselMobile images={images} />
			) : (
				<CarouselDesktop images={images} />
			)}
		</div>
	);
};

export default Carousel;
