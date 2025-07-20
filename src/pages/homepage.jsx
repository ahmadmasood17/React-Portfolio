import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
	faLinkedin,
	faWhatsapp,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
// import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
       'service_lgy16xm',       
      'template_gecllvo', 
      form.current,
      'ANGH_dhBVRgZmDppM'     
    )
    .then((result) => {
        console.log(result.text);
        console.log("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        console.log("An error occurred, please try again.");
    });
  };

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
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									Hi, I’m Ahmad Masood Full-Stack Developer
								</div>

								<div className="subtitle homepage-subtitle">
									{/* {INFO.homepage.description} */}
									Full Stack Developer specialized in crafting seamless user experiences with React, Next.js & Vite — and building robust backend systems with Laravel, PHP & Node.js.

								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="ahmad.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faDiscord}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href="tel:+923021735137"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faWhatsapp}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:ahmadmasood171717@gmail.com`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div id="about" className="homepage-about">

						</div>

						<div className="ab-section">
							<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
							<div className="bg-img w-50">
								<img
									src="/React.png"
									alt="rotating logo"
									className="rotate-slow"
								/>
							</div>
							<div className="w-50">
								<div className="title homepage-title ">
									About Us
								</div>
								<div className="subtitle homepage-subtitle">
									I craft modern, high-performance web
									applications using the latest tools and
									frameworks. On the frontend, I work with
									React, Next.js, and Vite to build fast,
									responsive, and intuitive user interfaces.
									On the backend, I build robust APIs and
									systems with Laravel, PHP, and Node.js. I’m
									driven by a passion for clean code, smooth
									user experience, and turning complex ideas
									into elegant digital products. Every project
									is an opportunity to blend creativity with
									technology — delivering solutions that are
									both beautiful and functional. Let’s connect
									and bring your vision to life! 🚀
								</div>
							</div>
						</div>

						<div className="homepage-projects" id="projects">
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div class="star"></div>
							<div className="title homepage-title text-center">
								Projects
							</div>
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles" id="experience">
								<div className="title homepage-title text-center">
									Experience
								</div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>

								<div className="homepage-works">
									<Works />
								</div>
							</div>
						</div>

						<div id="contact" className="homepage-contact">

							<div className="title homepage-title text-center">
								
							</div>
							<div className="flex ab-section con-section">
									<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
								<div class="star"></div>
							<div class="form w-50">
								<form ref={form} onSubmit={sendEmail}>
									<div className="title homepage-title ">
									Contect Us
								</div>
									<div class="input-container ic1">
										<input id="firstname" class="input" type="text" placeholder=" " name="user_name"/>
										<div class="cut"></div>
										<label for="Enter Your Name" class="placeholder">Enter Your Name</label>
									</div>
									
									<div class="input-container ic2">
										<input id="lastname" class="input" type="email" name="user_email" placeholder=" " />
										<div class="cut"></div>
										<label for="Enter Your Email" class="placeholder">Enter Your Email</label>
									</div>	
									<div class="input-container ic2">
										
										<textarea  name="message"   id="lastname" class="input" cols="30" rows="10" placeholder=" "></textarea>
										<div class="cut"></div>
										<label for="Enter Your Message" class="placeholder">Enter Your Massege</label>
									</div>	
									<button type="text" class="submit" >Submit</button>
								</form>
							</div>
							
							<div className="bg-img w-50">
								<img
									src="/React.png"
									alt="rotating logo"
									className="rotate-slow"
								/>
							</div>
						</div>
						
						</div>

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
