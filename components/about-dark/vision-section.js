/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function VisionSection() {
	return (
		<div className="fugu--vision-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4">
						<div className="fugu--swiper-slider-wrap">
							<div className="fugu--swiper-slider">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="fugu--card-wrap">
											<div className="fugu--card-thumb">
												<img src="/images/all-img/v3/crypto12.png" alt="" />
											</div>
											<div className="fugu--card-data">
												<h3>B2B Ultimate
												</h3>
												<p> 18 May 2024</p>
												<div className="fugu--card-footer">
													<div className="fugu--card-footer-data">
														<span>Dubai</span>
														
													</div>
													<Link href={"https://wa.me/00971568398322"} legacyBehavior>
														<a className="fugu--btn btn-sm bg-white"  target="_blank">Connect Whatsapp</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 offset-xl-2 col-lg-7 offset-lg-1 d-flex align-items-center">
						<div className="fugu--default-content content-sm">
							<h2>Our vision is to build a strong Crypto portfolio of denomination</h2>
							<p>
								We're excited about a brand new type of digital good called Crypto. Crypto have exciting new
								properties: unique, provably scarce, tradeable, and usable across multiple applications.
							</p>
							<p>
								Using blockchain technology to digitally signify ownership can make an investor's
								ownership of an asset more secure. Blockchain tech can also make ownership of more
								transparent.
							</p>
							<div  className="fugu--btn-wrap">
								<Link legacyBehavior href={"/"}>
									<a className="fugu--btn bg-gradient">Join Community</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
