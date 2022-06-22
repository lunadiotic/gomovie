import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Genre = () => {
	const [genres, setGenres] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
		// setMovies([]);
		const fetchGenres = async () => {
			try {
				const result = await axios(`http://localhost:4000/genres`);
				// console.log(result.data.movies);
				await setGenres(result.data.genres);
				setLoaded(true);
			} catch (err) {
				setErrorMessage(err.response.data)
			}
		};
		fetchGenres();
	}, []);
	return (
		<>
			<h2>Genres</h2>
            {!loaded ? 
				
				(() => {
					if (errorMessage) {
						return <h5>Oops... {errorMessage}</h5>
					} else {
						return <p>Loading...</p>
					}
				})()
				
			: (
				<ul>
                    <li>Comedy</li>
                    <li>Drama</li>
                    <li>Crime</li>
                </ul>
			)}
		</>
	);
};

export default Genre;
