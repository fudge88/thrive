import Contact from './components/contact/Contact';
import Hero from './components/hero/hero';
import Services from './components/services/Services';

const App = () => {
	return (
		<div className="container">
			<section id="#hero">
				<Hero />
			</section>
			<section id="#services">
				<Services />
			</section>
			<section id="#contact">
				<Contact />
			</section>
		</div>
	);
};

export default App;
