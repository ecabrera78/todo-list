import React, { useEffect, useState } from 'react';
import { useTodos } from '../../hooks/useTodos';

const TodoContext = React.createContext();

const TodoProvider = props => {
	const { todos, setTodos } = useTodos();
	const [isVisible, setIsVisible] = useState(false);

	let filteredTodos = [];
	let totalTodos = todos.length;

	let totalCompleted = todos.filter(item => item.status === 'Completed').length;
	const [searchText, setSearchText] = useState('');

	if (!searchText) {
		filteredTodos = [...todos];
	} else {
		const newTodos = todos.filter(item =>
			item.taskDesc.toLowerCase().includes(searchText.toLowerCase())
		);
		filteredTodos = [...newTodos];
	}

	const completeTodo = id => {
		const todoIndex = todos.findIndex(item => item.id === parseInt(id));
		const copyTodos = [...todos];
		copyTodos[todoIndex] = { ...copyTodos[todoIndex], status: 'Completed' };
		setTodos([...copyTodos]);
	};

	const deleteTodo = id => {
		let copyTodos = [...todos];
		let newTodos = copyTodos.filter(item => item.id !== id);
		setTodos([...newTodos]);
	};

	return (
		<TodoContext.Provider
			value={{
				filteredTodos,
				totalCompleted,
				totalTodos,
				completeTodo,
				deleteTodo,
				searchText,
				setSearchText,
				isVisible,
				setIsVisible,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
