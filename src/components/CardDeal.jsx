import React from "react";
import {card} from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal <br className='sm:block hidden' /> in few easy
					steps.
				</h2>
				<p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<Button styles='mt-10' />
			</div>
			<div className={layout.sectionImg}>
				<img src={card} alt='card' className='w-[100%] h-[100%]' />
			</div>
		</section>
	);
};

export default CardDeal;
