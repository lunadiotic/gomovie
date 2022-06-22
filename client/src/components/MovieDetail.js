/* third party */
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieTable from './MovieTable';

const MovieDetail = () => {
	let { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const result = await axios(`http://localhost:4000/movies/${id}`);
				// console.log(result.data.movies);
				await setMovie(result.data.movie);
				setLoaded(true);
			} catch (err) {
				setErrorMessage(err.response.data);
			}
		};
		fetchMovie();
	}, [id]);
	return (
		<Fragment>
			{!loaded ? (
				(() => {
					if (errorMessage) {
						return <h5>Oops... {errorMessage}</h5>;
					} else {
						return <p>Loading...</p>;
					}
				})()
			) : (
				<MovieTable movie={movie} />
			)}
		</Fragment>
	);
};

export default MovieDetail;
