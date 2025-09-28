import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
	const { users } = useSelector((store) => store.user);

	return (
		<div>
			<h2>Users</h2>
			{users.length === 0 && <p>אין עדיין משתמשים</p>}

			{users.length > 0 &&
				users.map((user) => {
					return <li key={user.id}>{user.name}</li>;
				})}
		</div>
	);
};

export default Users;
