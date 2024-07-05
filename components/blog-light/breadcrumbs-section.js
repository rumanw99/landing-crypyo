/* eslint-disable @next/next/no-img-element */
export default function BreadcrumbsSection() {
	return (
		<div className="fugu--breadcrumbs-section">
			<div className="fugu--breadcrumbs-data center-content">
				<h1 className="wow fadeInUpX" data-wow-delay="0s">
					Blog & Resources
				</h1>
				<p className="wow fadeInUpX" data-wow-delay="0.10s">
					Your source of market analysis, news, developments, and project reviews for the Crypto ecosystem.
					Discover and keep up to date with the latest Crypto news and events. Nexto is the best place to
					analyze, track and discover Crypto.
				</p>
				<div className="fugu--newsletter fugu--search wow fadeInUpX" data-wow-delay="0.20s">
					<input type="email" placeholder="Search..." />
					<button type="submit" id="fugu--submit-btn">
						Search
					</button>
					<button id="fugu--search-btn">
						<img src="/images/svg2/search.svg" alt="" />
					</button>
				</div>
			</div>


			<div className="fugu--circle-shape circle-one">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-two">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
