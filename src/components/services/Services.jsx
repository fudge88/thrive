import './services.css';
import Counter from './Counter';
import { IoFitness } from 'react-icons/io5';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { IoNutrition } from 'react-icons/io5';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const textVariants = {
	initial: {
		x: -100,
		y: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const listVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.5,
		},
	},
};

const serviceVariants = {
	initial: {
		x: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const services = [
	{
		id: 1,
		title: 'Peak Performance Training ',
		subTitle: 'Unlock Your Full Potential',
		description:
			'Optimize. Elevate. Perform. Our bespoke training enhances strength, endurance, and agility, ensuring you excel—whether in the boardroom or on the golf course.',
		icon: <IoFitness />,
		img: './watch.png',
	},
	{
		id: 2,
		title: 'Precision Recovery ',
		subTitle: 'Rebuild Stronger, Faster',
		description:
			'Recover. Rebuild. Dominate. Our advanced rehabilitation ensures swift recovery, resilience, and peak performance—keeping you in control.',
		icon: <MdOutlineFitnessCenter />,
		img: './dumbell.png',
	},
	{
		id: 3,
		title: 'Executive Nutrition ',
		subTitle: 'Fuel Success, Sustain Excellence',
		description:
			'Fuel for Success. Precision nutrition enhances clarity, energy, and longevity—keeping you sharp, focused, and unstoppable.',
		icon: <IoNutrition />,
		img: './apple.png',
	},
];
const Services = () => {
	const [currentServiceId, setCurrentServiceId] = useState(1);
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-200px' });

	const selectedService = services.find(
		(service) => service.id === currentServiceId
	);
	return (
		<div className="servicesContainer">
			<motion.h1
				variants={textVariants}
				animate={isInView ? 'animate' : 'initial'}
				className="sTitle">
				Precision. Performance. Power.
			</motion.h1>
			<div className="services" ref={ref}>
				<div className="sSection left">
					<h2 className="subTitle">Elite Training & Recovery</h2>
					<motion.div
						variants={listVariants}
						animate={isInView ? 'animate' : 'initial'}
						className="serviceList">
						{services.map((service) => (
							<motion.div
								variants={listVariants}
								className="service"
								key={service.id}
								onClick={() => setCurrentServiceId(service.id)}>
								<div className="serviceIcon">{service.icon}</div>
								<div className="serviceInfo">
									<h2>{service.title}</h2>
									<h3>{service.subTitle}</h3>
								</div>
							</motion.div>
						))}
					</motion.div>
					<div className="counterList">
						<Counter from={0} to={275} text="Success Stories" />
						<Counter from={0} to={132} text="Happy Clients" />
					</div>
				</div>
				<div className="sSection right">
					{selectedService && (
						<motion.div
							className="serviceDetails"
							variants={serviceVariants}
							animate={isInView ? 'animate' : 'initial'}>
							<h2>{selectedService.subTitle}</h2>
							<p>{selectedService.description}</p>
							<button className="serviceBtn">Learn More</button>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Services;
