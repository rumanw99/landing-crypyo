/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function BreadcrumbSection() {
	return (
		<div className="fugu-breadcrumb-section">
			<div className="container">
				<div className="breadcrumbs">
					<h1 style={{color:"white"}}  className="wow fadeInUpX" data-wow-delay="0s">
						Our Service
					</h1>
					<nav aria-label="breadcrumb" className="wow fadeInUpX" data-wow-delay="0.15s">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link style={{color:"white"}} href={"/"}>Home</Link>
							</li>
							<li style={{color:"white"}}  className="breadcrumb-item active" aria-current="page">
								Our Service
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="fugu-shape8">
				<img src="assets/images/shape/shape7.png" alt="" />
			</div>
			<div className="fugu-shape9">
				<img src="assets/images/shape/shape8.png" alt="" />
			</div>
		</div>
	);
}
