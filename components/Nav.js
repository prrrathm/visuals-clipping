// import React from "react";
import Link from "next/link";
import MobileDropdown from "./Dropdown";
const Nav = () => {
	return (
		<nav className="fixed flex top-0 right-0 left-0 bg-green-400 px-10 gap-5 justify-between items-center">
			<img className="p-5 border" />
			{/* SCREEN NAVBAR */}
			<ul className="border list-none hidden sm:flex flex-rows gap-2 justify-end ">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>Services</li>
				<li>
					<Link href="/">Pricing</Link>
				</li>
				<li>
					<Link href="/">Contact</Link>
				</li>
			</ul>
			{/* MOBILE NAVBAR */}
			<MobileDropdown />
		</nav>
	);
};

export default Nav;
