import React, { useState } from 'react';
import { useTodo } from '../../context/TodoContext';
import styles from "./TodoForm.module.css"

const TodoForm = () => {
	const [todo, setTodo] = useState({
		id: '',
		text: '',
		isCompleted: false,
	});
	const { addTodo } = useTodo();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('submit')

		// option 1 - יצירת ID
		// const d = new Date()
		// const id = d.toLocaleString()
		// option 2 - יצירת ID
		const id = Date.now();
		// console.log(id)

		// setTodo({
		// 	...todo,
		// 	id: id,
		// });

		const todoToSent = { ...todo };
		todoToSent.id = id;
		addTodo(todoToSent);

		setTodo({
			id: '',
			text: '',
			isCompleted: false,
		});
	};

	const handleChange = (e) => {
		// e - event - האירוע
		// target - האלמנט שמגיב לאירוע הזה
		// value - הערך של האלמנט שמגיב לאירוע הזה
		// console.log(e.target.value)
		setTodo({
			...todo,
			text: e.target.value,
		});
	};

	return (
		<div className={styles.container}>
			<h1>TodoForm</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label className={styles.visuallyHidden} htmlFor='todo-input'>Add a new todo</label>
				<input
					id='todo-input'
					type='text'
					placeholder='Add a new todo'
					onChange={handleChange}
					value={todo.text}
					className={styles.input}
					aria-label='Add a new todo'
				/>
				<button className={styles.button} type='submit'>Add</button>
			</form>
		</div>
	);
};

export default TodoForm;
