import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useTodo } from '../../context/TodoContext';
import styles from './TodoList.module.css';

const TodoList = () => {
  const { todos, deleteTodo, updateIsCompleted } = useTodo();

  if (todos.length === 0) {
    return <p className={styles.empty}>לא נוספו עדיין משימות</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={deleteTodo}
          onCompletedTodo={updateIsCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;


