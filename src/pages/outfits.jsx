import React from "react";
import NavBar from "../components/common/navBar";
import "./styles/squads.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "../components/common/tabpanel";

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function BasicTabs() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<h2>CREDIT’S LUMINOUS SYMPHONY</h2>
				<div style={{ textAlign: "justify" }}>
					<p>
						The perfect combination of the costume quality,
						Vietnam's beautiful culture preservation and the
						present-date preference turns our designs into a
						complete fashion collection. But what we deliver through
						our garments make it become a “<b>symphony</b>”, which
						has all characteristics that are associated with our
						collection. We hope this symphony has brought the soul
						of our CIB Credit stream to you and sang out the most
						joyful welcome of the new year 2024.
					</p>
					<p>
						The term “Credit” has a variety of meanings and does not
						limit itself in only financial context. By wisely
						choosing the material and creating details for our
						garments, we will deliver different versions of this
						term.
					</p>
					<p>
						For our stream’s unique culture, we all agree to opt for
						3 keywords: <b>Unity - Competence - Liveliness</b> which
						makes us not just a cohesive force ready to tackle any
						challenge that comes our way, but also a very close-knit
						family. We do not hesitate to share our skills,
						knowledge and experience and support each other. Either
						at the workplace or in daily life, our stream always
						maintains a lively and energetic atmosphere.
					</p>
				</div>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					TabIndicatorProps={{
						style: {
							backgroundColor: "#ec1d25",
						},
					}}
					// scrollButtons
					// allowScrollButtonsMobile
				>
					<Tab label="Four-panel dress" {...a11yProps(0)} />
					<Tab label="Vietnamese pajama" {...a11yProps(1)} />
					<Tab label="Ao dai" {...a11yProps(2)} />
					<Tab label="Corset lantern dress" {...a11yProps(3)} />
					<Tab label="Evening gown" {...a11yProps(4)} />
				</Tabs>
				<CustomTabPanel value={value} index={0}>
					<div style={{ textAlign: "justify" }}>
						<p>
							Áo tu than is a visual depiction of the North
							region’s culture that has been modernized to
							represent our Banh mi squad.
						</p>
						<p>
							Our first piece has the yellow shade as the dominant
							color, we wanted to add more texture and layers to
							create movement by using different kinds of pattern
							scarfs, and to resemble the Viet Nam banh mi.
						</p>
						<p>
							For the important part, we have added a special
							element to our adorable round fan, which is the QR
							code. In our collection, scanning this QR code will
							redirect you to our stream’s public website. In this
							case, we highlight another meaning of the term
							“Credit”, which is associated with{" "}
							<b>recognition and acknowledgement.</b>
						</p>
						<p>
							The wearers can take the advantages of the QR codes
							to transfer lucky money, which will prevent wasting
							envelopes, delivering incorrect amounts, or rushing
							to find and fill envelopes with cash. And in this
							context, “Credit” stands for{" "}
							<b>online transactions</b>.
						</p>
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<div style={{ textAlign: "justify" }}>
						<p>
							Áo ba ba embodies the essence of the culture of the
							South, and its pure white color reminds us of the
							delicious sticky rice known as Xoi in Vietnamese.
						</p>
						<p>
							With this costume, we aim to deliver the youthful,
							lively and cute image of Vietnamese girls. The
							simple wide-leg trousers and over layers skirt allow
							our beloved to be both graceful and playful.
						</p>
						<p>
							With this costume, we aim to deliver the youthful,
							lively and cute image of Vietnamese girls. The
							simple wide-leg trousers and over layers skirt allow
							our beloved to be both graceful and playful.
						</p>
						<p>
							This year, bow trends are back all around the world,
							especially in the fashion industry. Besides showing
							loveliness, ribbon can express one of the meanings
							of the “Credit” term which relates to{" "}
							<b>trust or belief</b>. We used the ribbon to
							present the image of <b>The knot of trust</b>.
						</p>
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<div style={{ textAlign: "justify" }}>
						<p>
							While discussing traditional attire that represent
							the Central region’s culture, people instantly
							conjure up images of the Hue Ao dai. In fact, the
							graceful Ao dai is prioritized wearing on numerous
							traditional occasions by people from all 3 regions.
						</p>
						<p>
							Our Ao dai features black and brown as the main hue,
							which not only focuses on the male wearers, but also
							represents BacXiu and CaPhe.
						</p>
						<p>
							Coffee in black or white is a popular beverage among
							Vietnamese, and depending on their different
							appetite, they will adjust the coffee's sweetness,
							bitterness, or heat. In order to accommodate this
							discrepancy, we prepare mock-ups of sugar and
							ice-cubes for our models, hoping that our “coffee”
							would be suitable for a wide range of individuals.
							And like how we tell our clients, whether they
							prefer sugar or ice, we are always ready to deliver
							it.
						</p>
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
					<div style={{ textAlign: "justify" }}>
						<p>
							The garment's purple color brings back memories of
							our idyllic Hue. Additionally, Hue is home to the
							delectable BunBo delicacies.
						</p>
						<p>
							Hoi An lanterns, the iconic symbol of the ancient
							town, served as inspiration for our choice of
							lantern dress. Traditionally, the lantern is
							released to wish everyone a happy new year.
						</p>
						<p>
							The combination of the dainty corset and the flowing
							lantern dress transforms our adorable girl into a
							sweet, gentle princess. This ribbon lantern is
							unique and is a memento of our stream happy
							memories. Every single one of them was gathered from
							the Credit's secret Santa for the Christmas of 2023.
							This is where our team's unity expresses itself.
						</p>
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={4}>
					<div style={{ textAlign: "justify" }}>
						<p>
							The shining vedette of our collection, a resplendent
							creation inspired by the mythical dragon heralding
							the New Year of 2024.
						</p>
						<p>
							This evening gown with cape-like shoulder attachment
							is intricately designed to embody the strength,
							majesty, and mystical allure of the legendary
							creature. The gold color, reminiscent of gold
							dragon, represents the royal strength, wealth,
							fortune and victory. With the hue of gold and
							sparkling charms, our gorgeous model appears shining
							and blessing on the runway. As the wearer graces the
							stage, she channels not only the regal spirit of the
							gold dragon, but also our best wishes for our
							beloved people with health, happiness, luck and
							success.
						</p>
						<p>
							With this masterpiece, we hope that our beloved
							women will usher in the New Year with elegance and
							grace.
						</p>
					</div>
				</CustomTabPanel>
			</Box>
		</Box>
	);
}

const Outfits = () => {
	return (
		<div className="page-content">
			<NavBar active="outfits" />
			<BasicTabs />
		</div>
	);
};

export default Outfits;
