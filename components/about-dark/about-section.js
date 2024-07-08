import { useSpring, animated } from 'react-spring';
export default function AboutSection() {

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
		<div className="fugu--about-section2">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--hero-content">
					<animated.div style={textProps}>
						<h1>About our company</h1></animated.div>
						<animated.div style={textContentProps}>
						<p>
						Founded in 2023 and based in the vibrant city of Dubai, B2B-Ultimate has swiftly established itself as a leader in the fintech industry. We specialize in providing comprehensive white-label solutions for Crypto exchanges, payment gateways, Crypto cards, ATMs, and POS machines. 
						Our team of dedicated professionals combines extensive industry knowledge with innovative technology to deliver tailored solutions that meet the evolving needs of our B2B clients.
						</p>
						</animated.div>
					</div>
				</div>
				<div className="fugu--thumb-thumb2 wow fadeInUpX" data-wow-delay=".10s">
					<img src="/images/all-img/about2/about-thumb.jpg" alt="" />
				</div>
			</div>
			{/* <div className="fugu--shpae5">
				<img src="/images/all-img/about2/shape.png" alt="" />
			</div> */}
		</div>
	);
}
