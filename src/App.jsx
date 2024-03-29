import "./App.css";
import Carousel from "./components/Carousel.jsx";
import CarouselItem from "./components/CarouselItem.jsx";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";

const App = () => {
	const carousel1Images = [image1, image2, image4, image3, image6, image5];
	const carousel2Images = [image1, image5, image3, image4, image6, image2];

	return (
		<div className="app">
			<h1>Infinite Image Carousel</h1>
			<Carousel>
				{carousel1Images.map((src, index) => (
					<CarouselItem key={index} src={src} />
				))}
			</Carousel>
			<Carousel>
				{carousel2Images.map((src, index) => (
					<CarouselItem key={index} src={src} />
				))}
			</Carousel>
		</div>
	);
};

export default App;
