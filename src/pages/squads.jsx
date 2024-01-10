import React from "react";
import NavBar from "../components/common/navBar";
import "./styles/squads.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Squad } from "../components/squads/squad";

const data = [
	{
		mainContent:
			"Our very first squad, BanhMi, is made up of our outstanding pioneers. BanhMi has represented our Credit team in NICV since the beginning, laying a solid foundation and making a positive impression on stakeholders. BanhMi is honored to be the creator of our business's core applications and famous for the successful delivery of Covenants, the largest business outcome until now.",
		secondaryContent:
			"It's worth noting that the majority of our team members participated in at least one sprint with the BanhMi squad, regardless of which squad they are the main member of, hence everyone is a BanhMi member. We usually refer to the BanhMi squad as our Cradle of Talents.",
	},
	{
		mainContent:
			"After collecting more excellent people, we decided to split our team into two squads, and Xoi was established as a result.",
		secondaryContent:
			"Xoi was founded and developed by members with extensive backend experience. As a result, they are trusted to take care of the implementation, enhancement, and protection of our platform and applications' access management. Thanks to Xoi, all of our applications can be delivered with impressive security and accuracy.",
	},
	{
		mainContent:
			"Unlike other squads, BacXiu has a sole female engineer among numerous remarkable and experienced developers.",
		secondaryContent:
			"With the help of outstanding individuals, BacXiu firmly took the first step toward our other major business outcome called Credit Activity. BacXiu successfully laid the strong groundwork for this application with their solid base in both technical and business knowledge.",
	},
	{
		mainContent:
			"BunBo was built with the initial talents from our rigid recruitment process, who have extensive experience in the technology industry.",
		secondaryContent:
			"BunBo, the first team established through the mentioned talent scouting above, has been challenged with a critical application that has a significant impact on other applications and then successfully impressed the stakeholders in the short time",
	},
	{
		mainContent:
			"CaPhe is the most recent squad to be formed. As the ‘lastborn’ of our team, CaPhe is expected to bring a breath of fresh air.",
		secondaryContent:
			"CaPhe is therefore trusted with managing the entire new business outcome and implementing an application incorporating advancements in both logic and user interface. Additionally, they won over the stakeholders by initiating the process of improving the user interface and overall experience.",
	},
];

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
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					// scrollButtons
					// allowScrollButtonsMobile
				>
					<Tab label="BanhMi" {...a11yProps(0)} />
					<Tab label="Xoi" {...a11yProps(1)} />
					<Tab label="BacXiu" {...a11yProps(2)} />
					<Tab label="BunBo" {...a11yProps(3)} />
					<Tab label="CaPhe" {...a11yProps(4)} />
				</Tabs>
			</Box>
			{data.map((squad, index) => (
				<Squad
					value={value}
					index={index}
					mainContent={squad.mainContent}
					secondaryContent={squad.secondaryContent}
				/>
			))}
		</Box>
	);
}

const Squads = () => {
	return (
		<div className="page-content">
			<NavBar active="squads" />
			<BasicTabs />
		</div>
	);
};

export default Squads;
