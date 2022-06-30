import React from 'react';

const TextArea = (props) => {
	return (
		<div className='mb-3'>
			<label htmlFor='' className='form-label'>
				Description
			</label>
			<textarea
				cols={props.cols}
				rows={props.row}
				className='form-control'
				id={props.name}
				name={props.name}
				value={props.value}
				onChange={props.handleChange}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default TextArea;
