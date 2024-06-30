/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Accordion } from "react-bootstrap";
export default function WalletSection() {
	return (
		<div className="fugu--content-section">
			<div className="container">
				<div className="fugu--content-top">
					<div className="row">
						<div className="col-xl-6 d-flex justify-content-center align-items-center order-xl-2">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".10s"
									src="/images/all-img/v5/thumb.png"
									alt=""
								/>
								<div className="fugu--circle-shape circle-three">
									<img src="/images/all-img/shapes-round.png" alt="" />
									<div className="waves wave-1"></div>
								</div>
								<div className="fugu--circle-shape circle-four">
									<img src="/images/all-img/shapes-round.png" alt="" />
									<div className="waves wave-1"></div>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="fugu--default-content">
								<h2>In the crypto world, we are secure & trustworthy</h2>
								<p>
								B2B Ultimate is one of the largest and safest platforms out there. The best crypto wallets
									provide a good mix of security tools and user-facing features at a reasonable cost.
								</p>
								<div className="fugu--meta">
									<ul>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Innovation: We continuously innovate to stay ahead in the dynamic fintech landscape.
										</li>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Integrity: We conduct our business with the highest standards of ethics and transparency.
										</li>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Customer-Centricity: Our clients’ success is our success. We strive to exceed their expectations in every interaction.
										</li>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Reliability: We ensure our solutions are robust, secure, and reliable.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--content-bottom">
					<div className="row">
						<div className="col-xl-6 d-flex align-items-center">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInLeft"
									data-wow-delay=".10s"
									src="/images/all-img/v5/thumb2.png"
									alt=""
								/>
								<div className="fugu--bitcoin">
									<img src="/images/all-img/v5/bitcoin4.png" alt="" />
								</div>
								<div className="fugu--content-shape">
									<img src="/images/shape2/shape-video.png" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="fugu--default-content">
								<h2>Easy step to use B2B Ultimate wallet on any device</h2>
								<p>
									While the concept is simple a place to store your crypto & use choosing B2B Ultimate crypto
									wallet can be an incredibly experience.
								</p>
								<div className="fugu--accordion-one accordion-two" id="accordionExample">
									<Accordion defaultActiveKey="0">
										<Accordion.Item eventKey="0">
											<Accordion.Header>Crypto Exchanges</Accordion.Header>
											<Accordion.Body>
											Crypto Exchanges: Customized white-label solutions that allow you to launch your own crypto exchange with ease.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>Payment Gateways</Accordion.Header>
											<Accordion.Body>
											Secure and efficient payment gateway solutions tailored to your business needs.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>Crypto Cards</Accordion.Header>
											<Accordion.Body>
											White-label crypto card services that enable your customers to seamlessly spend their cryptocurrency.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>ATMs and POS Machines</Accordion.Header>
											<Accordion.Body>
											Advanced ATMs and POS solutions designed for modern financial transactions.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="fugu--btn-wrap">
									<Link href={"#"} legacyBehavior>
										<a className="fugu--btn bg-blue">Go To Exchanges</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
