import React, { useContext } from 'react';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoItem } from '../../components/TodoItem';
import { TodoContext } from '../../context/TodosProvider';
import { TodoListContainer } from './styles';

export const TodoList = () => {
	const {
		filteredTodos,
		totalCompleted,
		totalTodos,
		completeTodo,
		deleteTodo,
	} = useContext(TodoContext);

	const onChangeHandler = e => {
		completeTodo(e.target.value);
	};

	const deleteTodoHandler = id => {
		deleteTodo(id);
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
		</TodoListContainer>
	);
};
