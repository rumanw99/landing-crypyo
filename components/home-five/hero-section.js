import Link from "next/link";

import { useSpring, animated } from 'react-spring';
/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {


	const AnimatedLetter = ({ letter, delay }) => {
		const styles = useSpring({
		  from: { opacity: 0, transform: 'translateY(-20px)' },
		  to: { opacity: 1, transform: 'translateY(0px)' },
		  delay: delay,
		  config: { duration: 500 },
		  loop: { reverse: true },
		});
	  
		return <animated.span style={styles}>{letter}</animated.span>;
	  };
	  
	  const AnimatedWord = ({ word }) => {
		return (
		  <div style={{ display: 'inline-flex' }}>
			{word.split('').map((letter, index) => (
			  <AnimatedLetter key={index} letter={letter} delay={index * 300} />
			))}
		  </div>
		);
	  };

	const textProps = useSpring({
		from: { opacity: 0, transform: 'translateX(-200px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 2000 },
	  });
	
	  const imageProps = useSpring({
		from: { opacity: 0, transform: 'translateX(200px)' },
		to: { opacity: 1, transform: 'translateX(0)' },
		config: { duration: 2000 },
	  });
	return (
		<div className="fugu--hero-section3" style={{ backgroundImage: "url(/images/all-img/v5/hero-bg2.png)" }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
				<animated.div style={textProps}>
						<div className="fugu--hero-content fugu--hero-content3">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
							New-gen of <br/> <div><AnimatedWord word="digital  currency" /></div>
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.15s">
								Get started with one of the easiest and most secure platforms for buying, selling,
								trading, and earning Cryptocurrency in one place.
							</p>
							<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.25s">
								<Link href={"/service"} legacyBehavior>
									<a className="fugu--btn bg-blue active">Get Started</a>
								</Link>
								<Link href={"/about-dark"} legacyBehavior>
									<a className="fugu--btn bg-blue">Discover More</a>
								</Link>
							</div>
						</div>
					</animated.div>
					</div>
					<div className="col-lg-5">
					<animated.div style={imageProps}>
						<div className="fugu--thumb-three">
							<div className="fugu--hero-thumb fugu--hero-thumb3">
								<img
									className="wow fadeInUpX"
									data-wow-delay="0.20s"
									src="/images/all-img/v5/hero-thumb.png"
									alt=""
								/>
								<div className="fugu--bitcoin bitcoin-one">
									<img src="/images/all-img/v5/bitcoin1.png" alt="" />
								</div>
								<div className="fugu--bitcoin bitcoin-two">
									<img src="/images/all-img/v5/bitcoin2.png" alt="" />
								</div>
								<div className="fugu--bitcoin bitcoin-three">
									<img src="/images/all-img/v5/bitcoin3.png" alt="" />
								</div>
							</div>
						</div>
					</animated.div>
					</div>
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
