import React from 'react';

export const TodoCounter = ({ totalCompleted = 0, totalTodos = 0 }) => (
	<span>{`You have completed ${totalCompleted} of ${totalTodos} tasks`}</span>
);
