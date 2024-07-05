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
								<h4 style={{color:"white"}}>Industry-leading security</h4>
								<p style={{color:"white"}}>
									Security tokens are digital that represent & transferred ownership rights to a
									blockchain token.
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
								<h4 style={{color:"white"}}>Ownership over your coins</h4>
								<p>
									The most reliable way to prove ownership of NFT currencies is to sign a specified
									message with a key.
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
								<h4 style={{color:"white"}}>Cold storage for most users</h4>
								<p>
									A cold wallet, otherwise known as a hardware wallet cold storage, is a physical
									device that keeps offline.
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
								<h4 style={{color:"white"}}>Crime insurance against theft</h4>
								<p>
									Crime insurance protects a company from loss of money, securities, inventory from
									fraud events.
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
								<h4 style={{color:"white"}}>Watch and analyze charts</h4>
								<p>
									A cold wallet, otherwise known as a hardware wallet cold storage, is a physical
									device that keeps offline.
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
								<h4 style={{color:"white"}}>Invest in real time</h4>
								<p>
									Crime insurance protects a company from loss of money, securities, inventory from
									fraud events.
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
