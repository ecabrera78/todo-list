import styled, { css } from 'styled-components';
import CancelIcon from '../../assets/icons/cancel_icon.svg';

const New = css`
	background: #b2ee84;
	border: 1px solid #75bc3f;
	color: #396b13;
`;

const Completed = css`
	background: #d3d3d3;
	border: 1px solid #9f9f9f;
	color: #656262;
`;

const Canceled = css`
	background: #e26363;
	border: 1px solid #aa2d2d;
	color: #700000;
`;

export const TodoContainer = styled.section`
	display: flex;
	position: relative;
	border-radius: 10px;
	padding: 5px 10px;
	margin-top: 5px;
	margin-bottom: 5px;
	${({ state }) => {
		switch (state) {
			case 'Completed':
				return Completed;
			case 'Canceled':
				return Canceled;
			default:
				return New;
		}
	}}
	font-size: 1rem;
`;

export const TodoCheck = styled.input.attrs(props => ({
	type: 'checkbox',
	name: props.name || 'option',
	id: props.id || 'option',
	value: props.value || 0,
}))`
	display: none;

	& + label::before {
		display: inline-block;
		content: '';
		width: 18px;
		height: 18px;
		border-radius: 4px;
		margin-right: 20px;
		background: green;
	}
`;

export const TodoLabel = styled.label.attrs(props => ({
	htmlFor: props.htmlFor,
}))`
	display: inline-block;
	text-decoration: ${props =>
		props.status === 'Completed' ? 'line-through' : 'none'};
`;

export const RemoveIcon = styled.span`
	@media screen and (min-width: 768px) {
		left: 93%;
	}
	display: inline-block;
	width: 20px;
	height: 20px;
	position: absolute;
	left: 90%;
	top: 5px;
	background-image: url(${CancelIcon});
	background-size: cover;
	background-repeat: no-repeat;
`;
