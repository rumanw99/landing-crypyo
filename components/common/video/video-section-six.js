/* eslint-disable @next/next/no-img-element */

import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionSix() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div style={{background:"#26242c" , color:"white"}} className="section fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 offset-xl-1 col-lg-6 order-lg-2">
						<div className="fugu-video-thumb wow fadeInUpX" data-wow-delay=".10s">
							<img src="/images/all-img/service/video-bg.png" alt="" />
							<div className="fugu-popup" onClick={() => setOpen(true)}>
								<img src="/images/all-img/video-btn.png" alt="" />
								<div className="fugu-play-btn">
									<img src="/images/all-img/play-btn.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2 style={{color:"white"}}>How do we provide our clients with industry a leading security?</h2>
							<p>
							At B2B-Ultimate, our mission is to empower businesses by offering cutting-edge financial technology solutions that enhance operational efficiency and drive growth. We are committed to delivering exceptional value through our white-label services, enabling our clients to offer secure, reliable, and user-friendly financial products under their own brand.
							</p>
							<p>
								Within those three main types, there are a even more options armed and unarmed,
								plainclothes or uniformed remote.
							</p>
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
