import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Users from './pages/Users';
import Home from './pages/Home';
import AddUser from './pages/AddUser';

const App = () => {
	return (
		<Router>
			<header>
				חלק העליון של האתר
				<div
					style={{
						height: '100px',
						width: '100%',
						direction: 'rtl',
					}}>
					<nav
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center',
							fontSize: '20px',
							height: '100%',
						}}>
						<Link to={'/'}>דף בית</Link>
						<Link to={'/counter'}>מונה קליקים</Link>
						<Link to={'/users'}>משתמשים</Link>
						<Link to={'/adduser'}>הוסף משתמש</Link>
					</nav>
				</div>
			</header>
			<main>
				<div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/counter' element={<Counter />} />
						<Route path='/users' element={<Users />} />
						<Route path='/adduser' element={<AddUser />} />
					</Routes>
				</div>
			</main>
			<footer>חלק תחתון של האתר</footer>
		</Router>
	);
};

export default App;
