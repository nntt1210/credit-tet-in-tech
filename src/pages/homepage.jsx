import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import ImageCarousel from "../components/homepage/carousel";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />/
				<div className="content-wrapper">
					<div className="homepage-container">
						<div>
							<div>
								<div className="title homepage-title">
									{INFO.homepage[0].title}
								</div>

								<div
									style={{ fontStyle: "italic" }}
									className="subtitle homepage-subtitle"
								>
									{INFO.homepage[0].description}
								</div>

								<div className="homepage-content">
									{INFO.homepage[0].content}
								</div>
							</div>
							<div style={{ marginTop: "2rem" }}>
								<div
									style={{ fontSize: "40px" }}
									className="title homepage-title"
								>
									{INFO.homepage[1].title}
								</div>

								<div className="homepage-content">
									{INFO.homepage[1].content}
								</div>
							</div>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<ImageCarousel />

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
