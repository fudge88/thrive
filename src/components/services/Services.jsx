import './services.css';
import Counter from './Counter';
import { IoFitness } from 'react-icons/io5';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { IoNutrition } from 'react-icons/io5';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

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

const services = [
	{
		id: 1,
		title: 'Peak Performance Training ',
		subTitle: 'Unlock Your Full Potential',
		description:
			'You don’t just train—you optimize. Our bespoke one-on-one training programs are designed to elevate strength, endurance, and agility, ensuring you perform at your absolute best—whether in the boardroom or on the golf course.',
		icon: <IoFitness />,
	},
	{
		id: 2,
		title: 'Precision Recovery ',
		subTitle: 'Rebuild Stronger, Faster',
		description:
			'Injury and fatigue shouldn’t slow you down. Our advanced rehabilitation techniques help high-performers like you recover efficiently, rebuild resilience, and prevent setbacks, so you stay in control of your health and performance.',
		icon: <MdOutlineFitnessCenter />,
	},
	{
		id: 3,
		title: 'Executive Nutrition ',
		subTitle: 'Fuel Success, Sustain Excellence',
		description:
			'Elite performance starts with the right fuel. Our tailored nutrition plans are designed to enhance cognitive clarity, energy levels, and longevity, keeping you sharp, focused, and ready to conquer every challenge.',
		icon: <IoNutrition />,
	},
];
const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-200px' });
	return (
		<div className="services" ref={ref}>
			<div className="sSection left">
				<motion.h1
					variants={textVariants}
					animate={isInView ? 'animate' : 'initial'}
					className="sTitle">
					Precision. Performance. Power.
				</motion.h1>
				<h2 className="subTitle">Elite Training & Recovery</h2>
				<motion.div
					variants={listVariants}
					animate={isInView ? 'animate' : 'initial'}
					className="serviceList">
					{services.map((service) => (
						<motion.div
							variants={listVariants}
							className="service"
							key={service.id}>
							<div className="serviceIcon">{service.icon}</div>
							<div className="serviceInfo">
								<h2>{service.title}</h2>
								<h3>{service.subTitle}</h3>
							</div>
						</motion.div>
					))}
				</motion.div>
				<div className="counterList">
					<Counter from={0} to={275} text="Transformations in Progress" />
					<Counter from={0} to={132} text="Happy Clients" />
				</div>
			</div>
			<div className="sService right"></div>
		</div>
	);
};

export default Services;
