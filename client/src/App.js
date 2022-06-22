/* third party */
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

/* internal source */
import Home from './components/Home';
import Admin from './components/Admin';
import Movies from './components/Movie';
import MovieDetail from './components/MovieDetail';
import Genre from './components/Genre';

/* style */
import './App.css';

function App() {
	return (
		<Router>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-3'>Go React Movie Project!</h1>
					<hr className='mb-3' />
				</div>
				<div className='row'>
					<div className='col-3'>
						<div className='card'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='list-group-item'>
									<Link to='/genres'>Genres</Link>
								</li>
								<li className='list-group-item'>
									<Link to='/movies'>Movies</Link>
								</li>
								<li className='list-group-item'>
									<Link to='/admin'>Admin</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-9'>
						<Routes>
							<Route exact path='/genres' element={<Genre />} />
							<Route path='/movies/:id' element={<MovieDetail />} />
							<Route path='/movies' element={<Movies />} />
							<Route path='/admin' element={<Admin />} />
							<Route path='/' element={<Home />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
