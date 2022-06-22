/* third party */
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const GenreDetail = (props) => {
	let { id } = useParams();
    const location = useLocation()
    const genreName = location.state.genre_name
	const [movies, setMovies] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const result = await axios(`http://localhost:4000/genres/${id}/movies`);
				if (result.data.movies) {
					setMovies(result.data.movies);
					setLoaded(true);
				} else {
					setErrorMessage('Nothing');
				}
			} catch (err) {}
		};
		fetchMovie();
	}, [id]);

	return (
		<Fragment>
			<h2>Genre: {genreName}</h2>

			{!loaded ? (
				(() => {
					if (errorMessage) {
						return <h5>Oops... {errorMessage}</h5>;
					} else {
						return <p>Loading...</p>;
					}
				})()
			) : (
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>
							<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
						</li>
					))}
				</ul>
			)}
		</Fragment>
	);
};

export default GenreDetail;
