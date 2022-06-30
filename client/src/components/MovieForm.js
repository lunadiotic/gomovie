import React, { useState } from 'react';

const MovieForm = () => {
	const [movie, setMovie] = useState({
		id: null,
		title: '',
		description: '',
		year: '',
		release_date: '',
		rating: '',
		runtime: '',
		mpaa_rating: '',
	});
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setMovie((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	return (
		<>
			<h2>Movie</h2>
			<hr />
			<pre>{JSON.stringify(movie)}</pre>
			<form action='post'>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Title
					</label>
					<input
						type='text'
						className='form-control'
						id='title'
						name='title'
						value={movie.title}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Release Date
					</label>
					<input
						type='text'
						className='form-control'
						id='release_date'
						name='release_date'
						value={movie.release_date}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Runtime
					</label>
					<input
						type='text'
						className='form-control'
						id='runtime'
						name='runtime'
						value={movie.runtime}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						MPAA Rating
					</label>
					<select
						name='mpaa_rating'
						id='mpaa_rating'
						className='form-control'
						value={movie.mpaa_rating}
						onChange={handleChange}
					>
						<option value='' className='form-select'>
							Choose...
						</option>
						<option value='G' className='form-select'>
							G
						</option>
						<option value='PG' className='form-select'>
							PG
						</option>
						<option value='PG13' className='form-select'>
							PG13
						</option>
						<option value='R' className='form-select'>
							R
						</option>
						<option value='NC17' className='form-select'>
							NC17
						</option>
					</select>
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Rating
					</label>
					<input
						type='text'
						className='form-control'
						id='rating'
						name='rating'
						value={movie.rating}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='' className='form-label'>
						Description
					</label>
					<textarea
						rows={3}
						className='form-control'
						id='description'
						name='description'
						value={movie.description}
						onChange={handleChange}
					/>
				</div>
				<hr />
				<button className='btn btn-primary mb-4'>Save</button>
			</form>
		</>
	);
};

export default MovieForm;
