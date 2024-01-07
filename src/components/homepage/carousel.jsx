import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
	return (
		<Carousel>
			<div>
				<img src="IMG_0778.JPG" />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src="IMG_0780.JPG" />
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<img src="IMG_0781.JPG" />
				<p className="legend">Legend 3</p>
			</div>
		</Carousel>
	);
};

export default ImageCarousel;
