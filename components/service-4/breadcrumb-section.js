/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSpring, animated } from 'react-spring';
export default function BreadcrumbSection() {


	const textProps = useSpring({
		from: { opacity: 0, transform: 'translateX(-400px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 2000 },
	  });
	
	  const imageProps = useSpring({
		from: { opacity: 0, transform: 'translateX(400px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 2000 },
	  });
	return (
		<div className="fugu-breadcrumb-section" >
			<div className="container">
				<div className="breadcrumbs">
				<animated.div style={textProps}>
					<h1 style={{color:"white"}}  className="wow fadeInUpX" data-wow-delay="0s">
						Our Service
					</h1>
					</animated.div>
					<animated.div style={imageProps}>
					<nav aria-label="breadcrumb" className="wow fadeInUpX" data-wow-delay="0.15s">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link style={{color:"white"}} href={"/"}>Home</Link>
							</li>
							<li style={{color:"white"}}  className="breadcrumb-item active" aria-current="page">
							ATMs and POS Machines
							</li>
						</ol>
					</nav>
					</animated.div>
				</div>
			</div>

			
			<div className="fugu-shape8">
				<img src="assets/images/shape/shape7.png" alt="" />
			</div>
			<div className="fugu-shape9">
				<img src="assets/images/shape/shape8.png" alt="" />
			</div>


			<div className="fugu--circle-shape circle-one">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-two">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
