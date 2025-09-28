import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';

const AddUser = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		phone: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const onAddUser = (e) => {
		e.preventDefault();

		const id = Date.now();
		const userFromState = { ...user };
		userFromState.id = id;
		dispatch(addUser(userFromState));
	};

	return (
		<div>
			<h1>AddUser</h1>
			<form onSubmit={onAddUser}>
				<div>
					<label htmlFor='username'>name</label>
					<input type='text' id='username' name='name' value={user.name} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor='email'>email</label>
					<input type='text' id='email' name='email' value={user.email} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor='phone'>phone</label>
					<input type='text' id='phone' name='phone' value={user.phone} onChange={handleChange} />
				</div>
				<div>
					<button type='submit'>הוסף משתמש</button>
				</div>
			</form>
		</div>
	);
};

export default AddUser;
