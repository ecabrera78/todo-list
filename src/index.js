import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { TodoProvider } from './context/TodosProvider';

ReactDOM.render(
	<TodoProvider>
		<App />
	</TodoProvider>,
	document.getElementById('root')
);
