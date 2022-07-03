import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import logo from "../public/logo.svg";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
	const [open, setOpen] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		open
			? document.body.classList.add("mobile-open")
			: document.body.classList.remove("mobile-open");
	}, [open]);

	useEffect(() => {
		function handleClickOutside(event) {
			if (headerRef.current && !headerRef.current.contains(event.target)) {
				setOpen(false);
			}
		}

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [headerRef]);

	useEffect(() => {
		function handleResize() {
			setOpen(false);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className="fixed z-10 w-full h-24 top-0 flex items-center"
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between items-center">
					{/* Logo */}
					<Link href="/" passHref>
						<a aria-label="home" onClick={() => setOpen(!open)}>
							<Image
								src={logo}
								alt="Kim Janssens logo"
								height={44}
								width={44}
							/>
						</a>
					</Link>

					{/* Mobile menu button */}
					<MenuButton open={open} setOpen={setOpen} />

					{/* Navigation */}
					<Navigation />

					{/* Mobile Navigation */}
					<MobileNavigation open={open} setOpen={setOpen} />
				</div>
			</div>
		</header>
	);
};

export default Header;
