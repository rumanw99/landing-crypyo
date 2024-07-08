/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeThree() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
					<div className="row">
						<div className="col-lg-4">
							<div className="fugu--textarea">
								<div className="fugu--footer-logo">
									{/* <img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" /> */}
									<span style={{color:"white"}}>B2B Ultimate</span>
								</div>
								<p>
								Founded in 2023 and based in the vibrant city of Dubai, B2B-Ultimate has swiftly established itself as a leader in the fintech industry.
								</p>
								<div className="fugu--social-icon">
									<ul>
										<li>
											<Link href="#">
												<img src="/images/social2/twitter.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/facebook.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/instagram.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/github.svg" alt="" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Products</span>
								<ul>
								<li>
										<Link href="service">Crypto Exchanges</Link>
									</li>
									<li>
										<Link href="service-2">Payment Gateways</Link>
									</li>
									<li>
										<Link href="service-3">Crypto Cards</Link>
									</li>
									<li>
										<Link href="service-4">ATMs and POS Machines</Link>
									</li>
									
								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Quiq Links</span>
								<ul>
								<li>
									<Link href="/">Home </Link>
								</li>
								<li>
									<Link href="/service">Products </Link>
								</li>
								<li>
									<Link href="/about-dark">About </Link>
								</li>
								<li>
									<Link href="/blog-dark">Blog </Link>
								</li>
								<li>
									<Link href="/contact-dark">Contact  </Link>
								</li>
								</ul>
							</div>
						</div>
						{/* <div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Marketplace</span>
								<ul>
									<li>
										<Link href="#">Explore NFT </Link>
									</li>
									<li>
										<Link href="#">Platform Status </Link>
									</li>
									<li>
										<Link href="#">Help center </Link>
									</li>
									<li>
										<Link href="#">Partners </Link>
									</li>
									<li>
										<Link href="#">Marketplace </Link>
									</li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
				<div className="fugu--footer-bottom">
					assets <p>&copy; Copyright 2024, B2B Ultimate</p>
					<div className="fugu--footer-menu">
						<ul>
							<li>
								<Link href="#">Terms </Link>
							</li>
							<li>
								<Link href="#"> Privacy Policy </Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
