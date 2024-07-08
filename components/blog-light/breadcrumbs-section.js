import { useSpring, animated } from 'react-spring';
export default function BreadcrumbsSection() {

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
					Blog & Resources
				</h1>
				
				</animated.div>
				<animated.div style={textContentProps}>
				<p className="wow fadeInUpX" data-wow-delay="0.10s">
				Welcome to our Crypto Blog & Resources page, your ultimate destination for in-depth market analysis, the latest news, and detailed reviews of cryptocurrency projects. Stay informed about the dynamic world of cryptocurrencies through our continuous news and event coverage. Explore trends, track market movements, and discover new opportunities within the cryptocurrency ecosystem. We provide reliable analyses and expertise to help you succeed in this ever-evolving field. Join us to stay updated on the latest developments and innovations in the world of cryptocurrencies.
				</p>
				</animated.div>
				<div className="fugu--newsletter fugu--search wow fadeInUpX" data-wow-delay="0.20s">
					<input type="email" placeholder="Search..." />
					<button type="submit" id="fugu--submit-btn">
						Search
					</button>
					<button id="fugu--search-btn">
						<img src="/images/svg2/search.svg" alt="" />
					</button>
				</div>
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
