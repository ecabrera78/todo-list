import styled from 'styled-components';
import AddTodoIcon from '../../assets/icons/add_icon.svg';

export const TodoListContainer = styled.section`
	padding: 5px 10px;
	@media screen and (min-width: 768px) {
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	span {
		color: #ffffff;
		font-size: 1.4rem;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}
`;

export const AddTodo = styled.span`
	display: block;
	width: 50px;
	height: 50px;
	position: fixed;
	bottom: 0;
	right: 0;
	background-image: url(${AddTodoIcon});
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 1;
`;
