/* third party */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Genre = () => {
	const [genres, setGenres] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const result = await axios(`http://localhost:4000/genres`);
				await setGenres(result.data.genres);
				setLoaded(true);
			} catch (err) {
				setErrorMessage(err.response.data);
			}
		};
		fetchGenres();
	}, []);
	return (
		<>
			<h2>Genres</h2>
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
					{genres.map((genre) => (
						<li key={genre.id}>
							<Link to={`/genres/${genre.id}`}>{genre.genre_name}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Genre;
