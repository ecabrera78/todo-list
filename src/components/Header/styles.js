import styled from 'styled-components';
import todoIcon from '../../assets/icons/todo_icon.svg';

export const TodoHeader = styled.header`
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #393939;
`;

export const TodoIcon = styled.span`
	width: 45px;
	height: 45px;
	display: inline-block;
	background-image: url(${todoIcon});
	background-repeat: no-repeat;
	background-size: cover;
	margin-right: 10px;
`;

export const Title = styled.h1`
	color: #ffffff;
	font-size: 2.4rem;
`;
