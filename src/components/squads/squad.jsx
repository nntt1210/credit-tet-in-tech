import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

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
			<div style={{ marginTop: "1rem", textAlign: "justify" }}>
				{secondaryContent}
			</div>
			<Carousel>
				{images.map((image, index) => (
					<div>
						<img src={image} alt={"squad" + index} />
					</div>
				))}
			</Carousel>
		</CustomTabPanel>
	);
};
