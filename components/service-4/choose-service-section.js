import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ChooseServiceSection() {
	return (
		<div style={{ color:"white"}} className="section fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2 style={{color:"white"}}>Choose the service you need</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4 style={{color:"white"}}>Global Presence and Growth</h4>
								<p style={{color:"white"}}>
								As of 2024, there are over 38,000 crypto ATMs worldwide, with significant installations in North America and Europe.

								</p>

								<Link href="" legacyBehavior>
									<a style={{color:"white"}} className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4 style={{color:"white"}}>Functionality</h4>
								<p>
								Crypto ATMs offer both one-way (buy only) and two-way (buy and sell) transaction capabilities.								</p>
								<Link href="" legacyBehavior>
									<a style={{color:"white"}} className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4 style={{color:"white"}}>Usage in Commercial Spaces</h4>
								<p>
								Businesses, particularly in the hospitality sector, are increasingly adopting crypto ATMs to attract tech-savvy customers.

								</p>
								<Link href="" legacyBehavior>
									<a style={{color:"white"}} className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon4.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4 style={{color:"white"}}>Integration and Security</h4>
								<p>
								Crypto ATM providers offer robust hardware and software solutions, ensuring secure transactions through advanced encryption and multi-factor authentication.

								</p>
								<Link href="" legacyBehavior>
									<a style={{color:"white"}} className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".40s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon5.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4 style={{color:"white"}}>Flexibility and Convenience</h4>
								<p>
								POS systems allow businesses to accept various cryptocurrencies, offering customers a versatile payment option.

								</p>
								<Link href="" legacyBehavior>
									<a style={{color:"white"}} className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".50s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon6.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4 style={{color:"white"}}>Advanced Features</h4>
								<p>
								Modern crypto POS systems come with features like instant conversion from crypto to fiat, 






								</p>
								<Link href="" legacyBehavior>
									<a style={{color:"white"}} className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
