/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CtaSection() {
	return (
		<div className="fugu--cta-section">
			<div className="container">
				<div className="fugu--cta-wrap">
					<div className="row">
						<div className="col-lg-6">
							<div className="fugu--cta-thumb wow fadeInUpX" data-wow-delay=".10s">
								<img src="/images/all-img/v5/cta-thumb.png" alt="" />
							</div>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<div className="fugu--default-content">
								<h2>Subscribe to learn more and get updates</h2>
								<p>
								Join the growing list of satisfied clients who trust B2B-Ultimate for their fintech needs. Together, we can transform the way financial services are delivered, making them more accessible, efficient, and secure for everyone.
								</p>
								<div className="fugu--newsletter fugu--newsletter2">
									<input type="email" placeholder="Type your email here" />
									<button type="submit" id="fugu--submit-btn">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--circle-shape circle-eight">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-nine">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
