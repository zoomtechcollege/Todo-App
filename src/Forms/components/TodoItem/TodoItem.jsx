import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onDeleteTodo, onCompletedTodo }) => {
  const textStyles = todo.isCompleted
    ? { textDecoration: 'line-through' }
    : { textDecoration: 'none' };

  return (
    <li className={styles.item}>
      <span className={styles.text} style={textStyles}>{todo.text}</span>
      <div className={styles.actions}>
        <button className={styles.deleteButton} onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        <button className={styles.completeButton} onClick={() => onCompletedTodo(todo.id)}>
          {todo.isCompleted ? 'Completed' : 'Complete'}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;


