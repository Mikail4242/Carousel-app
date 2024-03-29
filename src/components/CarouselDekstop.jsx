import React, { useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem.jsx";
import { useHorizontalScroll } from "./Custom.jsx";

const CarouselDesktop = ({ images }) => {
	const scrollContentRef = useRef(null);
	const scrollRef = useHorizontalScroll();
	const { elRef, totalScroll } = scrollRef;

	useEffect(() => {
		scrollContentRef.current.style.transform = `translateX(${totalScroll}%)`;
	}, [totalScroll]);

	return (
		<>
			<div className="carousel-container" ref={elRef}>
				<div className="carousel-content" ref={scrollContentRef}>
					{images.map((image, index) => (
						<CarouselItem key={index} src={image} />
					))}
					{images.map((image, index) => (
						<CarouselItem key={index} src={image} />
					))}
				</div>
			</div>
		</>
	);
};

export default CarouselDesktop;
