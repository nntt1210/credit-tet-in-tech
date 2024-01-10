import React from "react";
import NavBar from "../components/common/navBar";
import "./styles/squads.css";

import Tabs from "react-responsive-tabs";

// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";

const presidents = [
	{ name: "George Washington", biography: "griegjriejgriegj" },
	{ name: "Theodore Roosevelt", biography: "greigjegjreiogjrioegj" },
];

function getTabs() {
	return presidents.map((president) => ({
		// Optional. Equals to tab index if this property is omitted
		tabClassName: "tab", // Optional
		panelClassName: "panel", // Optional
		title: president.name,
		getContent: () => president.biography,
	}));
}

const Squads = () => {
	return (
		<div className="page-content">
			<NavBar active="squads" />
			<Tabs items={getTabs()} />
		</div>
	);
};

export default Squads;
