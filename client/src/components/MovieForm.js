/* third party */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* internal source */

const MovieForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm();

	let { id } = useParams();
	const isAddMode = !id;

	const fields = [
		'id',
		'title',
		'description',
		'runtime',
		'release_date',
		'runtime',
		'rating',
		'mpaa_rating',
		'genres',
	];
	const mpaaOptions = [
		{
			title: 'G',
		},
		{
			title: 'PG',
		},
		{
			title: 'PG13',
		},
		{
			title: 'R',
		},
		{
			title: 'NC17',
		},
	];

	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const fetchMovie = async (id) => {
		try {
			const result = await axios(`http://localhost:4000/movies/${id}`);
			// convert date result to fit input format
			result.data.movie.release_date = new Date(result.data.movie.release_date)
				.toISOString()
				.split('T')[0];
			setLoaded(true);
			fields.forEach((field) => setValue(field, result.data.movie[field]));
		} catch (err) {
			setErrorMessage(err.response.data);
		}
	};

	const resetForm = () => {
		fields.forEach((field) => setValue(field, ''));
	};

	useEffect(() => {
		if (!isAddMode) {
			fetchMovie(id);
		} else {
			resetForm();
		}
	}, [isAddMode]);

	const onSubmit = async (data) => {
		let dataJSON = JSON.stringify(data, (k, v) =>
			v && typeof v === 'object' ? v : '' + v
		);
		let payload = JSON.parse(dataJSON);
		const result = await axios.post(
			'http://localhost:4000/admin/movies/edit',
			JSON.stringify(payload)
		);
		console.log(result.data);
	};

	return (
		<>
			<h2>Movie</h2>
			<hr />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Title
					</label>
					<input
						type='text'
						className={`form-control ${errors.title && 'is-invalid'}`}
						id='title'
						name='title'
						{...register('title', { required: true })}
					/>
					{errors.title && (
						<div className='invalid-feedback'>Please input title.</div>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Release Date
					</label>
					<input
						type='date'
						className={`form-control ${errors.release_date && 'is-invalid'}`}
						id='release_date'
						name='release_date'
						{...register('release_date', { required: true })}
					/>
					{errors.release_date && (
						<div className='invalid-feedback'>Please input release date.</div>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Runtime
					</label>
					<input
						type='number'
						className={`form-control ${errors.runtime && 'is-invalid'}`}
						id='runtime'
						name='runtime'
						{...register('runtime', { required: true })}
					/>
					{errors.year && (
						<div className='invalid-feedback'>Please input year.</div>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						MPAA Rating
					</label>
					<select
						className={`form-control ${errors.mpaa_rating && 'is-invalid'}`}
						id='mpaa_rating'
						name='mpaa_rating'
						{...register('mpaa_rating', { required: true })}
					>
						{mpaaOptions.map((option, index) => {
							return (
								<option
									className='form-select'
									key={index}
									value={option.title}
								>
									{option.title}
								</option>
							);
						})}
					</select>

					{errors.mpaa_rating && (
						<div className='invalid-feedback'>Please input MPAA Rating.</div>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Rating
					</label>
					<input
						type='number'
						className={`form-control ${errors.rating && 'is-invalid'}`}
						id='rating'
						name='rating'
						{...register('rating', { required: true })}
					/>
					{errors.rating && (
						<div className='invalid-feedback'>Please input rating.</div>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Description
					</label>
					<textarea
						cols='10'
						rows='3'
						className={`form-control ${errors.description && 'is-invalid'}`}
						id='description'
						name='description'
						{...register('description', { required: true })}
					/>

					{errors.description && (
						<div className='invalid-feedback'>Please input description.</div>
					)}
				</div>
				<hr />
				<button className='btn btn-primary mb-4' type='submit'>
					Save
				</button>
			</form>
		</>
	);
};

export default MovieForm;
