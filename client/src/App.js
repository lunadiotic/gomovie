import './App.css';

function App() {
	return (
		<div className='container'>
			<div className='row'>
				<h1 className='mt-3'>Go React Movie Project!</h1>
				<hr className='mb-3' />
			</div>
			<div className='row'>
				<div className='col-2'>
					<div className='card' style={{ width: '18rem' }}>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item'>
								<a href='/'>Home</a>
							</li>
							<li className='list-group-item'>
								<a href='/movies'>Movies</a>
							</li>
							<li className='list-group-item'>
                <a href="/catalogue">Catalog</a>
              </li>
						</ul>
					</div>
				</div>
				<div className='col-10'></div>
			</div>
		</div>
	);
}

export default App;
