/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useForm } from "react-hook-form";

export default function CtaSection() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className="fugu--cta-section">
			<div className="container">
				{/* <div className="fugu--cta-wrap">
					<div className="row">
						<div className="col-lg-6">
							<div className="fugu--cta-thumb wow fadeInUpX" data-wow-delay=".10s">
								<img src="/images/all-img/v5/cta-thumb.png" alt="" />
							</div>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<div className="fugu--default-content">
								<h2>Subscribe to learn more and get updates</h2>
								<p>
								Join the growing list of satisfied clients who trust B2B-Ultimate for their fintech needs. Together, we can transform the way financial services are delivered, making them more accessible, efficient, and secure for everyone.
								</p>
								<div className="fugu--newsletter fugu--newsletter2">
									<input type="email" placeholder="Type your email here" />
									<button type="submit" id="fugu--submit-btn">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div> */}


					<div style={{color:"white"}} className="fugu--contact-form wow fadeInUpX" data-wow-delay="0.15s">
						<h3 style={{color:"white"}}>Leave a Reply:</h3>
						<p>Your email address will not be published. Required fields are marked*</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div  className="fugu--comment-field">
								<input
							
									type="text"
									placeholder="Your Name*"
									{...register("name", { required: true })}
									aria-invalid={errors.name ? "true" : "false"}
								/>
								{errors.name?.type === "required" && (
									<p role="alert" className="error">
										First name is required
									</p>
								)}
							</div>
							<div className="fugu--comment-field">
								<input
									type="email"
									placeholder="Your Email*"
									{...register("email", { required: true })}
									aria-invalid={errors.email ? "true" : "false"}
								/>
								{errors.email?.type === "required" && (
									<p role="alert" className="error">
										Email is required
									</p>
								)}
							</div>
							<div className="fugu--comment-field">
								<input
									type="phone"
									placeholder="Your Phone*"
									{...register("phone", { required: true })}
									aria-invalid={errors.phone ? "true" : "false"}
								/>
								{errors.email?.type === "required" && (
									<p role="alert" className="error">
										Email is required
									</p>
								)}
							</div>
							<div className="fugu--comment-field">
								<textarea
									name="textarea"
									placeholder="Write your comment*"
									{...register("comment")}
								></textarea>
							</div>
							<button id="fugu--form-submit-btn" type="submit">
								Post Comment
							</button>
						</form>
					</div>
	
			</div>
			<div className="fugu--circle-shape circle-eight">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-nine">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
