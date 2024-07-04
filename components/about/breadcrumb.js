/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Breadcrumb() {
	return (
		<div className="fugu-breadcrumb-section">
			<div className="container">
				<div className="breadcrumbs">
					<h1 style={{color:"white"}} className="wow fadeInUpX" data-wow-delay="0s">
						About Us
					</h1>
					<nav aria-label="breadcrumb" className="wow fadeInUpX" data-wow-delay="0.15s">
						<ol className="breadcrumb">
							<li  className="breadcrumb-item">
								<Link style={{color:"white"}} href={"/"}>Home</Link>
							</li>
							<li style={{color:"white"}} className="breadcrumb-item active" aria-current="page">
								About Us
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="fugu-shape8">
				<img src="/images/shape/shape7.png" alt="" />
			</div>
			<div className="fugu-shape9">
				<img src="/images/shape/shape8.png" alt="" />
			</div>
		</div>
	);
}
