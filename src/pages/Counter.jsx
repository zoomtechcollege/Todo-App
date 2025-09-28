import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/counterSlice';

const Counter = () => {
	const dispatch = useDispatch();
	const { value } = useSelector((store) => store.counter);

	const onIncrement = () => {
		dispatch(increment(10));
	};

	const onDecrement = () => {
		dispatch(decrement(1));
	};

	return (
		<div>
			<h1>Counter Tester With Redux</h1>
			<div>
				<button onClick={onIncrement}>+</button>
			</div>
			<div>
				<p>Counter {value}</p>
			</div>
			<div>
				<button onClick={onDecrement}>-</button>
			</div>
		</div>
	);
};

export default Counter;
