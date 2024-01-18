import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LazyImage from "../common/lazyimage";

const HomePageCarousel = () => {
	return (
		<Carousel>
			<div>
				<LazyImage
					src="IMG_0778.JPG"
					alt="Nghia's farewell"
					placeholderSrc="placeholder.jpg"
				/>
			</div>
			<div>
				<LazyImage
					src="IMG_0780.JPG"
					alt="Phu Yen trip"
					placeholderSrc="placeholder.jpg"
				/>
			</div>
			<div>
				<LazyImage
					src="IMG_0781.JPG"
					alt="Christmas party"
					placeholderSrc="placeholder.jpg"
				/>
			</div>
		</Carousel>
	);
};

export default HomePageCarousel;
