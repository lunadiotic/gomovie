import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setMovies([
			{ id: 1, title: 'Spongebob Squarepants', runtime: 145 },
			{ id: 2, title: 'Ogry', runtime: 145 },
			{ id: 3, title: 'Chalk Zone', runtime: 145 },
		]);
	}, []);

	return (
		<Fragment>
			<h2>Choose a movie</h2>
			<ul>
				{movies.map((movie) => (
					<li>
						<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
					</li>
				))}
			</ul>
		</Fragment>
	);
};

export default Movies;
