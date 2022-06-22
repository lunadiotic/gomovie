import React from 'react';
import { Link } from 'react-router-dom';

const MovieTable = ({ movie }) => {
	if (movie.genres) {
		movie.genres = Object.entries(movie.genres).map(([key, value]) => ([key,value]));
	} else {
		movie.genres = [];
	}
	return (
		<>
			<h2>
				Movie: {movie.title} ({movie.year})
			</h2>

			<div className='float-start'>
				<small>Rating: {movie.mpaa_rating}</small>
			</div>
			<div className='float-end'>
				{movie.genres.map((genre, index) => (
					// <span className='badge bg-secondary me-1' key={index}>{m}</span>
					<Link className='badge bg-secondary me-1' to={`/genres/${genre[0]}`} state={{ genre_name: genre[1]}}  key={index}>{genre[1]}</Link>
				))}
			</div>
            <div className="clearfix"></div>

            <hr />

			<table className='table table-dark table-striped table-sm mt-n4'>
				<thead></thead>
				<tbody>
					<tr>
						<td>
							<strong>Title:</strong>
						</td>
						<td>{movie.title}</td>
					</tr>
					<tr>
						<td>
							<strong>Description:</strong>
						</td>
						<td>{movie.description}</td>
					</tr>
					<tr>
						<td>
							<strong>Runtime:</strong>
						</td>
						<td>{movie.runtime} Minutes</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default MovieTable;
