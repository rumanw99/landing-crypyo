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
								<h4 style={{color:"white"}}>Ease of Customization</h4>
								<p style={{color:"white"}}>
								White-label crypto exchange platforms come with modular architectures that make it easy to customize the interface and functionalities to suit your specific needs

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
								<h4 style={{color:"white"}}>Quick Deployment</h4>
								<p>
								These solutions are pre-built and require only minor adjustments before they can be deployed.								</p>
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
								<h4 style={{color:"white"}}>Cost-Effective</h4>
								<p>
								Developing a crypto exchange from scratch is expensive and time-consuming. White-label solutions lower the costs and reduce development time

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
								<h4 style={{color:"white"}}>Robust Security</h4>
								<p>
								Security is a critical aspect of cryptocurrency exchanges. Providers like ChainUp and Coindhan Cloud offer advanced security features such as encryption protocols, multi-signature wallets

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
								<h4 style={{color:"white"}}>Comprehensive Features</h4>
								<p>
								These platforms often include a range of advanced trading features such as spot trading, margin trading, futures trading, and automated market making (AMM) for high liquidity.

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
								<h4 style={{color:"white"}}>Regulatory Compliance</h4>
								<p>
								Staying compliant with regulatory standards is crucial. White-label solutions typically include built-in compliance features for KYC/AML






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
