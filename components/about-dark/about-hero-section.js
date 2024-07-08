import { useSpring, animated } from 'react-spring';
export default function AboutHeroSection() {

	const textProps = useSpring({
		from: { opacity: 0, transform: 'translateX(-400px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 2000 },
	  });
	
	  const textContentProps = useSpring({
		from: { opacity: 0, transform: 'translateX(400px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 2000 },
	  });
	return (
		<div
			className="fugu--about-hero-section dark-version"
			style={{ backgroundImage: "url(/images/all-img/about2/bread-bg.png)" }}
		>
			<div className="container">
				<div className="fugu--breadcrumb-thumb-top">
				<animated.div style={textProps}>
					<div className="fugu--breadcrumb-thumb thumb1">
						<img src="/images/all-img/about2/crypto1.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textContentProps}>
					<div className="fugu--breadcrumb-thumb thumb2">
						<img src="/images/all-img/about2/crypto2.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textContentProps}>
					<div className="fugu--breadcrumb-thumb thumb3">
						<img src="/images/all-img/about2/crypto4.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textProps}>
					<div className="fugu--breadcrumb-thumb thumb4">
						<img src="/images/all-img/about2/crypto3.png" alt="" />
					</div>
					</animated.div>
				</div>
				<div className="fugu--breadcrumb-thumb-bottom">
				<animated.div style={textContentProps}>
					<div className="fugu--breadcrumb-thumb thumb2">
						<img src="/images/all-img/about2/crypto5.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textProps}>
					<div className="fugu--breadcrumb-thumb thumb3">
						<img src="/images/all-img/about2/crypto6.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textContentProps}>
					<div className="fugu--breadcrumb-thumb thumb4">
						<img src="/images/all-img/about2/crypto9.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textProps}>
					<div className="fugu--breadcrumb-thumb thumb2">
						<img src="/images/all-img/about2/crypto10.png" alt="" />
					</div>
					</animated.div>
					<animated.div style={textContentProps}>
					<div className="fugu--breadcrumb-thumb thumb3">
						<img src="/images/all-img/about2/crypto11.png" alt="" />
					</div>
					</animated.div>
				</div>
			</div>
		</div>
	);
}
