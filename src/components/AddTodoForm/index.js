import React from 'react';
import {
	AddTodoContaiener,
	CancelButton,
	CreateButton,
	TodoTextArea,
} from './styles';

export const AddTodoForm = ({ setIsVisible }) => {
	const handleSubmit = e => {
		e.preventDefault();
		console.log('submit form');
	};

	const handleCancelClick = e => {
		setIsVisible(false);
	};

	return (
		<AddTodoContaiener>
			<form onSubmit={handleSubmit}>
				<div>
					<TodoTextArea
						cols='30'
						rows='5'
						placeholder='Add new todo...'
					></TodoTextArea>
				</div>
				<div>
					<CancelButton onClick={handleCancelClick}>Cancelar</CancelButton>
					<CreateButton>Aceptar</CreateButton>
				</div>
			</form>
		</AddTodoContaiener>
	);
};
