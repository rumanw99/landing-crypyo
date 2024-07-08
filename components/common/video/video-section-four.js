/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionFour() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="fugu--video-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-6">
						<div className="fugu--video-thumb wow fadeInUpX" data-wow-delay="0.10s">
							<img style={{borderRadius:"20px" , height:"500px"}} src="/images/all-img/v5/tamework.png" alt="" />
							{/* <div className="fugu--popup" onClick={() => setOpen(true)}>
								<img src="/images/all-img/v5/play-button.png" alt="" />
								<div className="waves wave-1"></div>
								<div className="waves wave-2"></div>
								<div className="waves wave-3"></div>
							</div> */}
							{/* <div className="fugu--video-shape1">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div> */}
							{/* <div className="fugu--video-shape2">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div> */}
						</div>
					</div>
					<div className="col-xl-6 d-flex align-items-center">
						<div className="fugu--default-content">
							<h2> B2B Ultimate is the most trusted Cryptocurrency platform</h2>
							<p>
							Founded in 2023 and based in the vibrant city of Dubai, B2B-Ultimate has swiftly established itself as a leader in the fintech industry. We specialize in providing comprehensive white-label solutions for Crypto exchanges, payment gateways, Crypto cards, ATMs, and POS machines. 
							</p>
							<p>
							Our team of dedicated professionals combines extensive industry knowledge with innovative technology to deliver tailored solutions that meet the evolving needs of our B2B clients.
							</p>
							<div className="fugu--btn-wrap">
								<Link href={"about-dark"} legacyBehavior>
									<a className="fugu--btn bg-blue">Discover More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
