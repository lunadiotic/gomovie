/* third party */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
							<Route path='/admin' element={<Admin />} />
							<Route path='/movies' element={<Movie />} />
							<Route path='/' element={<Home />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

function Home() {
	return <h1>Home</h1>;
}

function Movie() {
	return <h1>Movies</h1>;
}

function Admin() {
	return <h1>Admin</h1>;
}

export default App;
