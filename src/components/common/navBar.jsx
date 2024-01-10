import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import Logo from "./logo";

const NavBar = (props) => {
	const { active } = props;

	return (
		<nav class="navbar">
			<div class="navbar-container container">
				<input type="checkbox" name="" id="" />
				<div class="hamburger-lines">
					<span class="line line1"></span>
					<span class="line line2"></span>
					<span class="line line3"></span>
				</div>
				<ul className="menu-items">
					<li
						className={
							active === "home" ? "nav-item active" : "nav-item"
						}
					>
						<Link to="/">Home</Link>
					</li>
					<li
						className={
							active === "squads" ? "nav-item active" : "nav-item"
						}
					>
						<Link to="/squads">Squads</Link>
					</li>
					<li
						className={
							active === "outfits"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link to="/outfits">Outfits</Link>
					</li>
					<li
						className={
							active === "contact"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link to="/contact-info">Contact</Link>
					</li>
				</ul>
				<div className="homepage-logo-container">
					<div>
						<Logo width={80} link={false} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
