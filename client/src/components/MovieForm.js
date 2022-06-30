/* third party */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

/* internal source */
import Input from './form/Input';
import Select from './form/Select';
import TextArea from './form/TextArea';

const MovieForm = () => {
	let { id } = useParams();
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
	const mpaaOptions = [
		{
			value: 'g',
			title: 'G',
		},
		{
			value: 'pg',
			title: 'PG',
		},
		{
			value: 'pg13',
			title: 'PG13',
		},
		{
			value: 'r',
			title: 'R',
		},
		{
			value: 'nc17',
			title: 'NC17',
		},
	];

	useEffect(() => {
		if (id) {
			const fetchMovie = async () => {
				try {
					const result = await axios(`http://localhost:4000/movies/${id}`);
					// convert date result to fit input format
					result.data.movie.release_date = new Date(
						result.data.movie.release_date
					)
						.toISOString()
						.split('T')[0];
					setMovie(result.data.movie);
					setLoaded(true);
				} catch (err) {
					setErrorMessage(err.response.data);
				}
			};
			fetchMovie();
		} else {
			setMovie({
				id: null,
				title: '',
				description: '',
				year: '',
				release_date: '',
				rating: '',
				runtime: '',
				mpaa_rating: '',
			})
		}
	}, [id]);

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
				<Input
					title={'Title'}
					type={'text'}
					name={'title'}
					value={movie.title}
					placeholder={'input your title here'}
					handleChange={handleChange}
				/>
				<Input
					title={'Release Date'}
					type={'date'}
					name={'release_date'}
					value={movie.release_date}
					placeholder={'input your release date here'}
					handleChange={handleChange}
				/>
				<Input
					title={'Year'}
					type={'text'}
					name={'year'}
					value={movie.year}
					placeholder={'input your year here'}
					handleChange={handleChange}
				/>

				<Select
					title={'MPAA Rating'}
					name={'mpaa_rating'}
					value={movie.mpaa_rating}
					placeholder={'-'}
					handleChange={handleChange}
					options={mpaaOptions}
				/>
				<Input
					title={'Rating'}
					type={'text'}
					name={'rating'}
					value={movie.rating}
					placeholder={'input your rating here'}
					handleChange={handleChange}
				/>
				<TextArea
					title={'Description'}
					cols={null}
					rows={3}
					name={'rating'}
					value={movie.description}
					placeholder={'input your rating description'}
					handleChange={handleChange}
				/>
				<hr />
				<button className='btn btn-primary mb-4'>Save</button>
			</form>
		</>
	);
};

export default MovieForm;
