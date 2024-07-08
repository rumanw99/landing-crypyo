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
								<h4 style={{color:"white"}}>Global Acceptance</h4>
								<p style={{color:"white"}}>
								White-label crypto cards are universally accepted at millions of locations worldwide, including ATMs and online merchants

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
								<h4 style={{color:"white"}}>Customizability</h4>
								<p>
								Businesses can customize the design of the cards, including the logo, color scheme, and branding elements. 								</p>
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
								<h4 style={{color:"white"}}>Security</h4>
								<p>
								Advanced security features such as two-factor authentication, encryption technologies, and multi-signature wallets are integral to these cards.

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
								<h4 style={{color:"white"}}>Reward Programs</h4>
								<p>
								Many providers offer loyalty programs, cashback rewards, and other perks to encourage the use of the cards. 

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
								<h4 style={{color:"white"}}>User-Friendly Integration</h4>
								<p>
								These cards can be easily integrated with existing crypto wallets and are supported by major card networks like Visa and Mastercard.

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
								<h4 style={{color:"white"}}>Revenue Generation</h4>
								<p>
								Businesses can create new revenue streams through fees generated from card transactions. 






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
