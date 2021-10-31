import React from 'react';
import { TodoCheck, TodoContainer, TodoLabel, RemoveIcon } from './styles';

export const TodoItem = ({ id, status, taskDesc, onChange, deleteHandler }) => (
	<TodoContainer state={status}>
		{status === 'New' && (
			<TodoCheck
				name={`todo${id}`}
				id={`todo${id}`}
				value={id}
				onChange={onChange}
			/>
		)}
		<TodoLabel htmlFor={`todo${id}`} status={status}>
			{taskDesc}
		</TodoLabel>
		<RemoveIcon onClick={deleteHandler} />
	</TodoContainer>
);
