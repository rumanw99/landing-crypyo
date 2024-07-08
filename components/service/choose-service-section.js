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
								<h4 style={{color:"white"}}>Crypto Trading</h4>
								<p style={{color:"white"}}>
								Efficient and secure platform for trading cryptocurrencies with real-time data and analytics.


								</p>

								<Link href="single-service" legacyBehavior>
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
								<h4 style={{color:"white"}}>Crypto Wallet Management</h4>
								<p>
								Manage and store your cryptocurrencies securely with our easy-to-use wallet solutions.
								</p>
								<Link href="single-service" legacyBehavior>
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
								<h4 style={{color:"white"}}>Crypto Payment Solutions</h4>
								<p>
								Facilitate cryptocurrency payments for your business with our seamless integration services.


								</p>
								<Link href="single-service" legacyBehavior>
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
								<h4 style={{color:"white"}}>Blockchain Development</h4>
								<p>
								Custom blockchain solutions tailored to your business needs, ensuring transparency and security.


								</p>
								<Link href="single-service" legacyBehavior>
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
								<h4 style={{color:"white"}}>Smart Contracts</h4>
								<p>
								Automate your agreements with our secure and efficient smart contract development services.


								</p>
								<Link href="single-service" legacyBehavior>
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
								<h4 style={{color:"white"}}>Crypto Mining Services</h4>
								<p>
								Reliable and efficient crypto mining solutions with top-notch hardware and software support.







								</p>
								<Link href="single-service" legacyBehavior>
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
