/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Slider from "react-slick";



const testimonials = [
	{
	  rating: 5,
	  text: "“I found B2B Ultimate very professional and trustworthy during my Crypto trading duration of 147 days. They are very honest and trusted.”",
	  author: "Karen Lynn",
	  position: "Founder @ Company",
	  image: "/images/all-img/v5/author1.png"
	},
	{
	  rating: 5,
	  text: "“100% Trusted. Very legit in Crypto world. So far I'm satisfied with B2B Ultimate. I just wish this will continue at this way and there will be no sudden changes.”",
	  author: "Subash Rajendran",
	  position: "Software engineer",
	  image: "/images/all-img/v5/author2.png"
	},
	{
	  rating: 5,
	  text: "“The best place to start your trading path, thank you for support. Its a safe passive income strategy and will be multiply over time 😍.”",
	  author: "Milan Milenkovic",
	  position: "Businessman",
	  image: "/images/all-img/v5/author3.png"
	},
	{
	  rating: 5,
	  text: "“Trustable ☺️ Best way to earn passive income. Everything was well explained and it was easy to follow their clear. Very legit in Crypto world.”",
	  author: "Francois Malan",
	  position: "UI/UX Designer",
	  image: "/images/all-img/v5/author4.png"
	},
	{
	  rating: 5,
	  text: "“More than just satisfied. Trustable site and the owner is very friendly & calm. And it’s great! The 0,5-1% daily on average is the target.”",
	  author: "Nadir Zeblah",
	  position: "Manager @ Company",
	  image: "/images/all-img/v5/author5.png"
	},
	{
	  rating: 5,
	  text: "“Best Crypto scam investigator. It took less than 24h and gave all the details about the scammer and guided me. My heartfull thanks 💗 ”",
	  author: "Abdul Wadud",
	  position: "WP Developer",
	  image: "/images/all-img/v5/author6.png"
	}
  ];

export default function TestimonialSection() {


	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	return (
		<div className="fugu--testimonial-section fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content">
						<h2>Users around the world have a great experience with B2B Ultimate</h2>
						<p>
						B2B Ultimate is a place of trust for millions of people. Our customer reviews overall and is rated
							just 4.5 out of 5 stars on Trustpilot. It is the right place for you.
						</p>
					</div>
				</div>
				{/* <div className="row">
				
					<div className="col-xl-4 col-md-6">
						<div style={{borderRadius:"20px"}}  className="fugu--testimonial-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu--testimonial-rating">
								<ul>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
								</ul>
							</div>
							<div className="fugu--testimonial-data">
								<p>
									“I found B2B Ultimate very professional and trustworthy during my Crypto trading duration of
									147 days. They are very honest and trusted.”
								</p>
							</div>
							<div className="fugu--testimonial-author">
								<div className="fugu--testimonial-author-thumb">
									<img src="/images/all-img/v5/author1.png" alt="" />
								</div>
								<div className="fugu--testimonial-author-data">
									<span>- Karen Lynn</span>
									<p>Founder @ Company</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div style={{borderRadius:"20px"}}  className="fugu--testimonial-wrap wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu--testimonial-rating">
								<ul>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
								</ul>
							</div>
							<div className="fugu--testimonial-data">
								<p>
									“100% Trusted. Very legit in Crypto world. So far I'm satisfied with B2B Ultimate. I just
									wish this will continue at this way and there will be no sudden changes.”
								</p>
							</div>
							<div className="fugu--testimonial-author">
								<div className="fugu--testimonial-author-thumb">
									<img src="/images/all-img/v5/author2.png" alt="" />
								</div>
								<div className="fugu--testimonial-author-data">
									<span>- Subash Rajendran</span>
									<p>Software engineer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div style={{borderRadius:"20px"}}  className="fugu--testimonial-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu--testimonial-rating">
								<ul>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
								</ul>
							</div>
							<div className="fugu--testimonial-data">
								<p>
									“The best place to start your trading path, thank you for support. Its a safe
									passive income strategy and will be multiply over time 😍.”
								</p>
							</div>
							<div className="fugu--testimonial-author">
								<div className="fugu--testimonial-author-thumb">
									<img src="/images/all-img/v5/author3.png" alt="" />
								</div>
								<div className="fugu--testimonial-author-data">
									<span>- Milan Milenkovic</span>
									<p>Businessman</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div style={{borderRadius:"20px"}}  className="fugu--testimonial-wrap wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu--testimonial-rating">
								<ul>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
								</ul>
							</div>
							<div className="fugu--testimonial-data">
								<p>
									“Trustable ☺️ Best way to earn passive income. Everything was well explained and it
									was easy to follow their clear. Very legit in Crypto world.”
								</p>
							</div>
							<div className="fugu--testimonial-author">
								<div className="fugu--testimonial-author-thumb">
									<img src="/images/all-img/v5/author4.png" alt="" />
								</div>
								<div className="fugu--testimonial-author-data">
									<span>- Francois Malan</span>
									<p>UI/UX Designer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div style={{borderRadius:"20px"}}  className="fugu--testimonial-wrap wow fadeInUpX" data-wow-delay=".40s">
							<div className="fugu--testimonial-rating">
								<ul>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
								</ul>
							</div>
							<div className="fugu--testimonial-data">
								<p>
									“More than just satisfied.Trustable site and the owner is very friendly & calm. And
									it’s great! The 0,5-1% daily on average is the target.”
								</p>
							</div>
							<div className="fugu--testimonial-author">
								<div className="fugu--testimonial-author-thumb">
									<img src="/images/all-img/v5/author5.png" alt="" />
								</div>
								<div className="fugu--testimonial-author-data">
									<span>- Nadir Zeblah</span>
									<p>Manager @ Company</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div style={{borderRadius:"20px"}}  className="fugu--testimonial-wrap wow fadeInUpX" data-wow-delay=".50s">
							<div className="fugu--testimonial-rating">
								<ul>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg2/star.svg" alt="" />
									</li>
								</ul>
							</div>
							<div className="fugu--testimonial-data">
								<p>
									“Best Crypto scam investigator. It took less than 24h and gave all the details about
									the scammer and guided me. My heartfull thanks 💗 ”
								</p>
							</div>
							<div className="fugu--testimonial-author">
								<div className="fugu--testimonial-author-thumb">
									<img src="/images/all-img/v5/author6.png" alt="" />
								</div>
								<div className="fugu--testimonial-author-data">
									<span>- Abdul Wadud</span>
									<p>WP Developer</p>
								</div>
							</div>
						</div>
					</div>
					
				</div> */}


<div className="fugu--testimonial-slider" style={{height:"500px"}}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="fugu--testimonial-wrap" style={{borderRadius:"20px"}}>
            <div className="fugu--testimonial-rating">
              <ul>
                {[...Array(testimonial.rating)].map((star, i) => (
                  <li key={i}>
                    <img src="/images/svg2/star.svg" alt="Star" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="fugu--testimonial-data">
              <p>{testimonial.text}</p>
            </div>
            <div className="fugu--testimonial-author">
              <div className="fugu--testimonial-author-thumb">
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <div className="fugu--testimonial-author-data">
                <span>- {testimonial.author}</span>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
				<div className="fugu--testimonial-button">
					<Link href={"/about-dark"} legacyBehavior>
						<a className="fugu--btn bg-blue">View All Reviews</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
