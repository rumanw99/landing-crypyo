/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderTwo() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="fugu--text-slider-section">
			<div className="fugu--text-slider">
				<Slider {...settings}>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img style={{width:"40px" , height:"40px"}} src="/images/all-img/service/crypto23.png" alt="" />
						</div>
						<h3>Crypto Exchanges</h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img style={{width:"40px" , height:"40px"}} src="/images/all-img/service/crypto24.png" alt="" />
						</div>
						<h3>Payment Gateways</h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img style={{width:"40px" , height:"40px"}} src="/images/all-img/service/crypto25.png" alt="" />
						</div>
						<h3>Crypto Cards</h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img style={{width:"40px" , height:"40px"}} src="/images/all-img/service/crypto26.png" alt="" />
						</div>
						<h3>ATMs and POS Machines</h3>
					</div>
				</Slider>
			</div>
		</div>
	);
}
