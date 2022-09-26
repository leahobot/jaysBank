import React, {useState} from "react";
import {close, logo, menu} from "../assets";
import {navLinks} from "../constants";

const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleBg, setToggleBg] = useState(false);
	const [toggleActive, setToggleActive] = useState(false);

	const changeNavBg = () => {
		if (window.scrollY >= 80) {
			setToggleBg(true);
		} else {
			setToggleBg(false);
		}
	};
	window.addEventListener("scroll", changeNavBg);

	return (
		<nav
			className={`${
				toggleBg ? "navBg" : ""
			} navbar w-full flex py-6 justify-between items-center`}>
			<a href='#home' className='cursor-pointer'>
				<img src={logo} alt="Jay's Bank" className='w-[150px] h-[40px]' />
			</a>
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((item, index) => (
					<li
						key={item.id}
						className={`font-poppins font-normal text-white ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						}`}>
						<a
							href={`#${item.id}`}
							className='hover:text-secondary text-[18px]'>
							{item.title}
						</a>
					</li>
				))}
			</ul>
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggleMenu ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain'
					onClick={() => setToggleMenu((previous) => !previous)}
				/>
				<div
					className={`${
						toggleMenu ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((item, index) => (
							<li
								key={item.id}
								className={`font-poppins font-normal cursor-pointer text-[i6px] text-white ${
									index === navLinks.length - 1 ? "mb-0" : "mb-4"
								}`}>
								<a href={`#${item.id}`}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
