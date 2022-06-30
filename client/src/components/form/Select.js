import React from 'react';

const Select = (props) => {
	return (
		<div className='mb-3'>
			<label htmlFor='' className='form-label'>
				{props.title}
			</label>
			<select
				className='form-control'
				id={props.name}
				name={props.name}
				value={props.value}
				onChange={props.handleChange}
			>
				<option value='' className='form-select'>
					{props.placeholder}
				</option>
				{props.options.map((option, index) => {
					return (
						<option 
                            className='form-select' 
                            key={index} 
                            value={option.value}  
                            defaultValue={props.value === option.value ? 'selected' : ''}
                        >
							{option.title}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
