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
				<div className='row'>
					{genres.map((genre) => (
						<div className='col-sm-2 mb-3'>
							<div className='card'>
								<div class="card-body text-center">
								<Link to={`/genres/${genre.id}`} state={{ genre_name: genre.genre_name }}>{genre.genre_name}</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Genre;
