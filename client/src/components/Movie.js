import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		// setMovies([]);
		const fetchMovie = async () => {
			try {
				const result = await axios(`http://localhost:4000/movies`);
				// console.log(result.data.movies);
				await setMovies(result.data.movies);
				setLoaded(true);
			} catch (err) {
				setErrorMessage(err.response.data);
			}
		};
		fetchMovie();
	}, []);

	return (
		<Fragment>
			<h2>Choose a movie</h2>

			{!loaded ? (
				(() => {
					if (errorMessage) {
						return <h5>Oops... {errorMessage}</h5>;
					} else {
						return <p>Loading...</p>;
					}
				})()
			) : (
				<div className='row'>
					{movies.map((movie) => (
						<div className='col-sm-4 mb-3'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>{movie.title}</h5>
									<p className='card-text'>{movie.description}</p>
									<Link to={`/movies/${movie.id}`} className='btn btn-primary'>
										Read More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</Fragment>
	);
};

export default Movies;
