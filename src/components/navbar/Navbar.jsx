import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isMenuOpen &&
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				!buttonRef.current.contains(event.target)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	// Handle escape key press
	useEffect(() => {
		const handleEscKey = (event) => {
			if (isMenuOpen && event.key === "Escape") {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscKey);
		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	}, [isMenuOpen]);

	// Prevent body scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	// Handle scroll event to change navbar appearance
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Call once to set initial state based on scroll position
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
				<button
					ref={buttonRef}
					className="menu-button"
					onClick={toggleMenu}
					aria-expanded={isMenuOpen}
					aria-controls="side-menu"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</button>

				<div className="logo-container">
					<img src="/thrive.png" alt="Thrive Logo" className="logo" />
				</div>
			</nav>

			{/* Menu overlay */}
			<div
				className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
				onClick={() => setIsMenuOpen(false)}
				aria-hidden="true"></div>

			{/* Side menu */}
			<div
				id="side-menu"
				ref={menuRef}
				className={`side-menu ${isMenuOpen ? "open" : ""}`}
				aria-hidden={!isMenuOpen}>
				<ul className="nav-links">
					<li>
						<a href="#hero" onClick={() => setIsMenuOpen(false)}>
							Home
						</a>
					</li>
					<li>
						<a href="#services" onClick={() => setIsMenuOpen(false)}>
							Services
						</a>
					</li>
					<li>
						<a href="#about" onClick={() => setIsMenuOpen(false)}>
							About
						</a>
					</li>
					<li>
						<a href="#contact" onClick={() => setIsMenuOpen(false)}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
