import React, { useContext } from 'react';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoItem } from '../../components/TodoItem';
import { TodoContext } from '../../context/TodosProvider';
import { TodoListContainer, AddTodo } from './styles';

export const TodoList = () => {
	const {
		filteredTodos,
		totalCompleted,
		totalTodos,
		completeTodo,
		deleteTodo,
		isVisible,
		setIsVisible,
	} = useContext(TodoContext);

	const onChangeHandler = e => {
		completeTodo(e.target.value);
	};

	const deleteTodoHandler = id => {
		deleteTodo(id);
	};

	const openModalHandler = () => {
		setIsVisible(!isVisible);
	};

	return (
		<TodoListContainer>
			<TodoCounter totalCompleted={totalCompleted} totalTodos={totalTodos} />
			<ul>
				{filteredTodos.map(item => (
					<li key={item.id}>
						<TodoItem
							{...item}
							onChange={onChangeHandler}
							deleteHandler={() => deleteTodoHandler(item.id)}
						/>
					</li>
				))}
			</ul>
			<AddTodo onClick={openModalHandler}></AddTodo>
		</TodoListContainer>
	);
};
