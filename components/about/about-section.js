/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
	return (
		<div style={{background:"#26242c" , color:"white"}} className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-7 col-lg-6">
						<div className="fugu-about-thumb">
							<img
								className="wow fadeInLeft"
								data-wow-delay=".10s"
								src="/images/all-img/about/about-thumb1.png"
								alt=""
							/>
							<div className="fugu-about-thumb2">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".30s"
									src="/images/all-img/about/about-thumb2.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2 style={{color:"white"}}>The story behind our companys beginnings and our mission</h2>
							<p>
							Founded in 2023 and based in the vibrant city of Dubai, B2B-Ultimate has swiftly established itself as a leader in the fintech industry. We specialize in providing comprehensive white-label solutions for NFT exchanges, payment gateways, NFT cards, ATMs, and POS machines. 
							</p>
							<p>
							Our team of dedicated professionals combines extensive industry knowledge with innovative technology to deliver tailored solutions that meet the evolving needs of our B2B clients.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
