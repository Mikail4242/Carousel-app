import React from "react";
import CarouselDesktop from "./CarouselDekstop.jsx";
import CarouselMobile from "./CarouselMobile.jsx";
import { useMediaQuery } from "react-responsive";

const Carousel = ({ children }) => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<>
			{isMobile ? (
				<CarouselMobile>{children}</CarouselMobile>
			) : (
				<CarouselDesktop>{children}</CarouselDesktop>
			)}
		</>
	);
};

export default Carousel;
