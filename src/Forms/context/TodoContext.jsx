import { createContext, useContext, useState, useEffect } from "react";


// יצירת ה context
const TodoContext = createContext()


// יצירת ה Provider
export function TodoProvider({children}){
    const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem('todos');
		return savedTodos ? JSON.parse(localStorage.getItem('todos')) : [];
	});

    useEffect(() => {
		console.log('טעינה ראשונה');
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

    const addTodo = (todo) => {
		// spread - מפצל את המערך לאיברים בודדים
		setTodos([...todos, todo]);
	};

	const deleteTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};
	
	const updateIsCompleted = (id) => {
		setTodos((prevTodos) => prevTodos.map((todo) => {
			if(todo.id === id){
				todo.isCompleted = true 
			}
			return todo
		}));
	}

    const value = {
        todos,
        addTodo,
        deleteTodo,
        updateIsCompleted
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


// יצירת ה HOOK לשימוש ב CONTEXT
export function useTodo(){
    return useContext(TodoContext)
}