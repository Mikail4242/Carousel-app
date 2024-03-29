import React, { useEffect, useRef } from "react";
import { useHorizontalScroll } from "./Custom.jsx";

const CarouselDesktop = ({ children }) => {
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
					{children}
					{children}
				</div>
			</div>
		</>
	);
};

export default CarouselDesktop;
