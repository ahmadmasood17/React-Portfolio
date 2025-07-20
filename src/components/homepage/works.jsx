import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="flex-gap">
							<img
								src="./re2qa.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="title-sub">
								<div className="work-title">RE2QA</div>
								<div className="work-subtitle">
									Software Engineer
								</div>
							</div>
							</div>

							<div className="work-duration">2024 - 2025</div>
						</div>

						<div className="work">
								<div className="flex-gap">
							<img
								src="./yodo.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="title-sub">
							<div className="work-title">YODO DESIGNS</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							</div>
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
