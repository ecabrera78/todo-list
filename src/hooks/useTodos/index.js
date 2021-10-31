import React, { useState } from 'react';

export const useTodos = () => {
	let initialTodos = [
		{ id: 1, status: 'New', taskDesc: 'Learn React' },
		{ id: 2, status: 'Completed', taskDesc: 'Walking out with dogs' },
		{ id: 3, status: 'New', taskDesc: 'Read a book' },
		{ id: 4, status: 'New', taskDesc: 'Play video games with friends' },
		{ id: 5, status: 'Canceled', taskDesc: 'Have a dinner with friends' },
		{ id: 6, status: 'Canceled', taskDesc: 'Go to movies' },
		{ id: 7, status: 'Completed', taskDesc: 'Learn Webpack' },
	];

	const [todos, setTodos] = useState(initialTodos);

	return {
		todos,
		setTodos,
	};
};
