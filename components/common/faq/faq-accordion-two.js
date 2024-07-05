/* eslint-disable @next/next/no-img-element */

import { Accordion } from "react-bootstrap";
export default function FaqAccordionTwo() {
	return (
		<div className="fugu--faq-section2 fugu--section-padding-bottom">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content">
						<h2>Do you have any questions about Cryptocurrency? Ask us</h2>
						<p>
							Frequently asked questions qbout Cryptocurrency & blockchain technology. Cryptographic
							security for conducting trusted transactions.
						</p>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-three" id="accordionExample2">
					<div className="row">
						<div className="col-lg-6">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Q. What is cryptocurrency?</Accordion.Header>
									<Accordion.Body>
									Cryptocurrency is a type of digital asset that uses cryptography to secure transactions and control the creation of new units
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Q. How can I buy cryptocurrencies?
									</Accordion.Header>
									<Accordion.Body>
									You can buy cryptocurrencies through online cryptocurrency exchanges like Binance or Coinbase.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Q. What is mining and how does it work?</Accordion.Header>
									<Accordion.Body>
									Mining is the process of verifying transactions and adding them to the public ledger (blockchain). Mining requires solving complex mathematical problems using powerful computers.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col-lg-6">
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header>Q. What is blockchain technology?</Accordion.Header>
									<Accordion.Body>
									Blockchain is a distributed digital ledger that records all transactions made with a particular cryptocurrency
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Q. Are cryptocurrencies safe?
									</Accordion.Header>
									<Accordion.Body>
									The security of cryptocurrencies depends on how users handle their digital wallets and transactions
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>What are the common uses of cryptocurrencies?</Accordion.Header>
									<Accordion.Body>
									Cryptocurrencies are used for various purposes such as investment, day trading, international money transfers, and paying for goods and services
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--circle-shape circle-five">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-six">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-seven">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
