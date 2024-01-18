import React from "react";
import { Carousel } from "react-responsive-carousel";
import CustomTabPanel from "../common/tabpanel";
import LazyImage from "../common/lazyimage";

export const Squad = ({
	value,
	index,
	mainContent,
	secondaryContent,
	images,
}) => {
	return (
		<CustomTabPanel value={value} index={index}>
			<div style={{ textAlign: "justify" }}>{mainContent}</div>
			<div style={{ margin: "1rem 0", textAlign: "justify" }}>
				{secondaryContent}
			</div>
			<Carousel>
				{images.map((image, index) => (
					<div>
						<LazyImage
							src={image}
							alt={"squad" + index}
							placeholderSrc="placeholder.jpg"
						/>
					</div>
				))}
			</Carousel>
		</CustomTabPanel>
	);
};
