import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div>
			<TodoForm />
			<TodoList />
		</div>
	);
};

export default App;
