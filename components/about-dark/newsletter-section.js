import { useForm , Controller} from "react-hook-form";

import Select from 'react-select';
export default function NewsletterSection() {



	const options = [
		{ value: 'option1', label: 'Crypto Exchanges' },
		{ value: 'option2', label: 'Payment Gateways' },
		{ value: 'option3', label: 'Crypto Cards' },
		{ value: 'option3', label: 'ATMs and POS Machines' },
	  ];
	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const customStyles = {
		control: (provided, state) => ({
		  ...provided,
		  background: "#13111a", 
		  border: state.isFocused ? '1px solid #80bdff' : '1px solid #ced4da',
		  boxShadow: state.isFocused ? '0 0 0 .2rem rgba(0, 123, 255, .25)' : 'none',
		  '&:hover': {
			border: state.isFocused ? '1px solid #80bdff' : '1px solid #80bdff'
		  },
		  borderRadius: '.25rem',
		//   padding: '0 0.75rem',
		//   height: 'calc(2.25rem + 2px)',
		  display: 'flex',
		  alignItems: 'center'
		}),
		// valueContainer: (provided) => ({
		// 	...provided,
		// 	padding: '10px', // إزالة أي حشو إضافي قد يسبب المربع
		//   }),

		input: (provided) => ({
			...provided,
			margin: '0', // إزالة الهوامش
			padding: '0', // إزالة الحشوات
			opacity: '0', // إخفاء الإدخال
		  }),
		multiValue: (provided) => ({
		  ...provided,
		  backgroundColor: '#007bff',
		  color: 'white',
		  borderRadius: '.25rem',
		}),
		multiValueLabel: (provided) => ({
		  ...provided,
		  color: 'white',
		}),
		multiValueRemove: (provided) => ({
		  ...provided,
		  color: 'white',
		  ':hover': {
			backgroundColor: 'blue',
			color: 'white',
		  },
		}),
		option: (provided, state) => ({
		  ...provided,
		  backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? 'rgba(0, 123, 255, .1)' : 'white',
		  color: state.isSelected ? 'white' : '#007bff',
		  padding: '.5rem 1rem',
		}),

		placeholder: (provided) => ({
			...provided,
			// color: '#ced4da',
			marginLeft: '20px',
		  }),
		  indicatorsContainer: (provided) => ({
			...provided,
			display: 'flex',
			alignItems: 'center',
		  }),
	  };
	return (
		<div className="fugu--newslatter-section">
			<div className="container">
				{/* <div className="fugu--newslatter-wrap">
					<div className="fugu--section-title">
						<div className="fugu--default-content content-sm wow fadeInUpX" data-wow-delay=".10s">
							<h2>Subscribe to get the latest news updates about Crypto</h2>
							<p>
								Get regular updates about interesting & secret upcoming Crypto projects & events that are
								coming exclusively on our site.
							</p>
						</div>
					</div>
					<div className="fugu--newsletter wow fadeInUpX" data-wow-delay=".20s">
						<input type="email" placeholder="Type your email here" />
						<button type="submit" id="fugu--submit-btn">
							Subscribe
						</button>
					</div>
				</div> */}

<div style={{color:"white"}} className="fugu--contact-form wow fadeInUpX" data-wow-delay="0.15s">
						<h3 style={{color:"white"}}>Leave a Reply:</h3>
						<p>Your email address will not be published. Required fields are marked*</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div  className="fugu--comment-field">
								<input
							style={{background: "#13111a",}}
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
								style={{background: "#13111a",}}
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
								style={{background: "#13111a",}}
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
        <Controller
          name="multiSelect"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isMulti
              placeholder="Select options*"
			  styles={customStyles} 	
            //   classNamePrefix="custom-select"
              aria-invalid={errors.multiSelect ? "true" : "false"}
			  
            />
          )}
        />
        {errors.multiSelect && (
          <p role="alert" className="error">
            Selecting at least one option is required
          </p>
        )}
      </div>
							<div className="fugu--comment-field">
								<textarea
								style={{background: "#13111a",}}
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
			{/* <div className="fugu--shape4">
				<img src="/images/shape2/shape4.png" alt="" />
			</div> */}
		</div>
	);
}
