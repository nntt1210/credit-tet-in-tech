import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import Squads from "./pages/squads";
import Outfits from "./pages/outfits";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/squads" element={<Squads />} />
				<Route path="/outfits" element={<Outfits />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
