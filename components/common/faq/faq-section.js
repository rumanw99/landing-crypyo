import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function FaqSection() {
	return (
		<div style={{ color:"white"}} className="section fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content">
							<h2 style={{color:"white"}}>Ask if you have any questions about us.</h2>
							<p>We are ready to answer all your questions. Ask us any questions you may have.</p>
							<Link href={"/contact"} legacyBehavior>
								<a style={{color:"white"}} className="fugu-faq-btn">Don't find the answer? Contact us here</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4 style={{color:"white"}}>What are the best ways to secure my cryptocurrency wallet?</h4>
								<p>
								Use two-factor authentication, store private keys in a secure offline location, and use trusted hardware wallets for protection.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4 style={{color:"white"}}>How do I start trading cryptocurrencies safely and efficiently?</h4>
								<p>
								Begin by learning, choose reliable trading platforms, diversify your portfolio, and only invest what you can afford to lose to mitigate high risks.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4 style={{color:"white"}}>What are the main advantages and disadvantages of using smart contracts in business?</h4>
								<p>
								Smart contracts offer security, transparency, and cost reduction, but they may face legal challenges and complexities in programming and execution.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
