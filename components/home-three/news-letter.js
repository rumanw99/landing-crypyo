/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NewsLetter() {
	return (
		<div className="fugu--newslatter-section">
			<div className="container">
				<div className="fugu--newslatter-wrap">
					<div className="fugu--section-title">
						<div className="fugu--default-content content-sm">
							<h2>Subscribe to get the latest news updates about Crypto</h2>
							<p>
								Get regular updates about interesting & secret upcoming Crypto projects & events that are
								coming exclusively on our site.
							</p>
						</div>
					</div>
					<div className="fugu--newsletter">
						<input type="email" placeholder="Type your email here" />
						<button type="submit" id="fugu--submit-btn">
							Subscribe
						</button>
					</div>
				</div>
			</div>
			{/* <div className="fugu--shape4">
				<img src="/images/shape2/shape4.png" alt="" />
			</div> */}
		</div>
	);
}
