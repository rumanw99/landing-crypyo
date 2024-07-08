/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useForm , Controller} from "react-hook-form";

import Select from 'react-select';
export default function CtaSection() {

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
		  borderRadius: '10px',
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
		<div className="fugu--cta-section">
			<div className="container">
				


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
