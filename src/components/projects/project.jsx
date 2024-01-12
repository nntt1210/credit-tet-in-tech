import React from "react";
import "./styles/project.css";

const Project = (props) => {
	const { title, description } = props;

	return (
		<div className="project">
			<div className="project-container">
				<p className="project-title">{title}</p>
				<p className="project-description">{description}</p>
			</div>
		</div>
	);
};

export default Project;
