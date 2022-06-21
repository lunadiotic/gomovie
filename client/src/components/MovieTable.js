import React from 'react';

const MovieTable = ({ movie }) => {
	if (movie.genres) {
		movie.genres = Object.values(movie.genres);
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
				{movie.genres.map((m, index) => (
					<span className='badge bg-secondary me-1' key={index}>{m}</span>
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
