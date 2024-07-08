import React from "react";
import { useSpring, animated } from 'react-spring';
export default function BreadcrumbSection() {

	const textProps = useSpring({
		from: { opacity: 0, transform: 'translateX(-400px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 1000 },
	  });
	
	  const textContentProps = useSpring({
		from: { opacity: 0, transform: 'translateX(400px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 1000 },
	  });
	return (
		<div className="fugu--breadcrumbs-section">
			<div className="fugu--breadcrumbs-data center-content">
			<animated.div style={textProps}>
				<h1 className="wow fadeInUpX" data-wow-delay="0s">
					Get in touch with us
				</h1>
				</animated.div>
				<animated.div style={textContentProps}>
				<p className="wow fadeInUpX" data-wow-delay="0.15s">
					We are here to help. Just send us a message to get any of your questions answered and we will get
					back to you within 24-48 hours or as soon as possible.
				</p>
				</animated.div>
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
