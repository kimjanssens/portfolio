import React from "react";

const MenuButton = ({ open, setOpen }) => {
	return (
		<button
			type="button"
			className="block md:hidden w-10 h-10 text-turquoise-blue relative focus:outline-none z-10"
			aria-controls="mobile-menu"
			aria-expanded={open}
			onClick={() => setOpen(!open)}
		>
			<span className="sr-only">Open main menu</span>
			<div className="relative">
				<span
					aria-hidden="true"
					className={`block absolute left-0 h-0.5 w-10 bg-current transform transition duration-500 ease-in-out ${
						open ? "rotate-45" : "-translate-y-3"
					}`}
				></span>
				<span
					aria-hidden="true"
					className={`block absolute right-0 h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
						open && "opacity-0"
					}`}
				></span>
				<span
					aria-hidden="true"
					className={`block absolute right-0 h-0.5 w-10 bg-current transform  transition duration-500 ease-in-out ${
						open ? "-rotate-45" : "translate-y-3"
					}`}
				></span>
			</div>
		</button>
	);
};

export default MenuButton;
