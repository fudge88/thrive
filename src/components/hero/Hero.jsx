import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './hero.css';

const Hero = () => {
	return (
		<div className="hero">
			<section className="hSection left">
				<h1 className="hTitle">
					Personal Training
					<br />
					<TypeAnimation
						sequence={[
							1000,
							'done by experts.',
							1000,
							'be stronger.',
							1000,
							'be healthier.',
							1000,
						]}
						wrapper="span"
						speed={40}
						deletionSpeed={60}
						repeat={Infinity}
					/>
				</h1>
				<div className="awards">
					<h2>Top rated Personal Training</h2>
					<p>Affiliated with prestigious establishments</p>
					<div className="awardsList">
						<img src="/award1.png" alt="merylebone health logo" />
						<img src="/award2.png" alt="lanserhof logo" />
						<img
							style={{ paddingLeft: '10px', paddingRight: '10px' }}
							src="/award3.png"
							alt="four seasons logo"
						/>
						<img src="/award4.png" alt="claridges logo" />
						<img
							style={{ paddingLeft: '10px', paddingRight: '10px' }}
							src="/award5.png"
							alt="toronto gold club logo"
						/>
					</div>
				</div>
				<a href="#services" className="scroll">
					<svg
						viewBox="0 0 24 24"
						width="50"
						height="50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
							stroke="black"
							strokeWidth="1"
						/>
						<path
							d="M12 5V8"
							stroke="black"
							strokeWidth="1"
							strokeLinecap="round"
						/>
					</svg>
				</a>
			</section>
			<section className="hSection right">
				<div className="follow">
					<a href="/">
						<img src="/instagram.png"></img>
					</a>
					<a href="/">
						<img src="/facebook.png"></img>
					</a>
					<a href="/">
						<img src="/youtube.png"></img>
					</a>
					<div className="followTextContainer">
						<div className="followText">FOLLOW ME</div>
					</div>
				</div>
				<div className="certificate">
					<img src="/certificate.png" alt="certificate" />
					Personal Training
					<br />
					Strength and conditioning
					<br />
					Rehabilitation and performance
				</div>
				<a href="/contact" className="contactLink">
					<div className="contactButton">
						<svg viewBox="0 0 200 200" width="150" height="150">
							<circle cx="100" cy="100" r="90" fill="pink" />
							<path
								id="innerCirclePath"
								fill="none"
								d="M 100 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
							/>
							<text className="circleText">
								<textPath href="#innerCirclePath">Hire Now</textPath>
							</text>
							<text className="circleText">
								<textPath href="#innerCirclePath" startOffset="50%">
									Contact Me
								</textPath>
							</text>
						</svg>
						<div className="arrow">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="50"
								height="50"
								fill="none"
								stroke="black"
								stroke-width="2">
								<line x1="6" y1="18" x2="18" y2="6" />
								<polyline points="9 6 18 6 18 15" />
							</svg>
						</div>
					</div>
				</a>
			</section>
		</div>
	);
};

export default Hero;
