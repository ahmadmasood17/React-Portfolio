

import "./styles/navBar.css";

const NavBar = ({ active }) => {
	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li
							className={
								active === "#home"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#">Home</a>
						</li>
						<li
							className={
								active === "#about"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#about">About</a>
						</li>
						<li
							className={
								active === "#projects"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#projects">Projects</a>
						</li>
						<li
							className={
								active === "#experience"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#experience">Experience</a>
						</li>
						<li
							className={
								active === "#contact"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
