import React from "react";
import styles from "../style";
import {footerLinks, socialMedia} from "../constants";
import {logo} from "../assets";

const Footer = () => {
	return (
		<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className='flex flex-1 flex-col mr-10 justify-start'>
					<a href='#home'>
						<img
							src={logo}
							alt="Jay's Bank"
							className='w-[266px] h-[72px] object-contain'
						/>
					</a>

					<p className={`${styles.paragraph} max-w-[310px] mt-4`}>
						The future of easy, reliable and the most secure form of payments.
					</p>
				</div>

				<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
					{footerLinks.map((item, index) => (
						<div
							key={index}
							className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
							<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
								{item.title}
							</h4>
							<ul className='list-none mt-4'>
								{item.links.map((link, index) => (
									<li
										key={link.name}
										className={`font-poppins font-normal text-dimWhite cursor-pointer text-[16px] leading-[24px] hover:text-secondary ${
											index !== item.links.length - 1 ? "mb-4" : "mb-0"
										}`}>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#1B4332]'>
				<p className='font-poppins font-normal text-[18px] text-center leading-[27px] text-white'>
					2022 Jay's Bank. All Rights Reserved.
				</p>

				<div className='flex flex-row md:mt-0 mt-6'>
					{socialMedia.map((social, index) => (
						<a href={social.link} target='_blank' rel='noreferrer'>
							<img
								key={social.id}
								src={social.icon}
								alt={social.id}
								className={`w-[21px] h-[21px] object-contain ${
									index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
								}`}
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
