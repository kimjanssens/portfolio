"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import logo from "../public/logo.svg";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
	const headerRef = useRef(null);

	const [open, setOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [header, setHeader] = useState(false);

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

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > scrollPosition) {
				setHeader(true);
			} else {
				setHeader(false);
			}

			setScrollPosition(window.scrollY);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	})

	return (
		<header
			ref={headerRef}
			className={classNames("fixed z-10 w-full h-24 top-0 flex items-center transition duration-300 ease-in-out", {
				"-translate-y-24": header,
				"translate-y-0 bg-prussian-blue shadow-xl": !header && scrollPosition > 0,
			})}
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between items-center">
					{/* Logo */}
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
						<Link
							href="/"
							aria-label="home"
							onClick={() => setOpen(!open)}
							passHref
						>
							<Image
								src={logo}
								alt="Kim Janssens logo"
								height={44}
								width="auto"
							/>
						</Link>
					</motion.div>

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
