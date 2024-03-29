import React, { useRef } from "react";
import CarouselItem from "./CarouselItem.jsx";
import "../App.css";

const CarouselMobile = ({ images }) => {
	const scrollContainerRef = useRef(null);
	const originalItemsRef = useRef(null);
	function appendNodeList(parent, nodeList) {
		Array.from(nodeList).forEach((node) => {
			parent.appendChild(node.cloneNode(true));
		});
	}

	const handleScroll = (e) => {
		const endOfScroll =
			scrollContainerRef.current.scrollWidth -
			scrollContainerRef.current.clientWidth -
			400;
		const scrollLeft = scrollContainerRef.current.scrollLeft;
		const getChilds = originalItemsRef.current.querySelectorAll(".item");
		if (scrollLeft + scrollContainerRef.current.clientWidth >= endOfScroll) {
			appendNodeList(scrollContainerRef.current, getChilds);
		}
	};

	const Original = () => (
		<div
			className="scroll-container"
			style={{ display: "none" }}
			ref={originalItemsRef}
			onScroll={handleScroll}>
			{images.map((image, index) => (
				<CarouselItem key={index} src={image} />
			))}
		</div>
	);

	return (
		<div
			className="scroll-container"
			ref={scrollContainerRef}
			onScroll={handleScroll}>
			<Original />
			{images.map((image, index) => (
				<CarouselItem key={index} src={image} />
			))}
		</div>
	);
};

export default CarouselMobile;