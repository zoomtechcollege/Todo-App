import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App_Forms from './Forms/App';
import { TodoProvider } from './Forms/context/TodoContext';

createRoot(document.getElementById('root')).render(
	<TodoProvider>
		<App_Forms />
	</TodoProvider>
);
