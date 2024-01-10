import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
	return (
		<Carousel>
			<div>
				<img src="IMG_0778.JPG" alt="Nghia's farewell" />
				<p className="legend">Nghia's farewell</p>
			</div>
			<div>
				<img src="IMG_0780.JPG" alt="Phu Yen trip" />
				<p className="legend">Phu Yen trip</p>
			</div>
			<div>
				<img src="IMG_0781.JPG" alt="Christmas party" />
				<p className="legend">Christmas party</p>
			</div>
		</Carousel>
	);
};

export default ImageCarousel;
