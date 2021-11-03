import styled from 'styled-components';

export const AddTodoContaiener = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;

	form {
		max-width: 400px;
		min-width: 320px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px 10px;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		border-radius: 15px;
		flex-direction: column;
		align-items: center;
		background-color: rgba(17, 25, 40, 0.55);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border: 1px solid rgba(255, 255, 255, 0.225);
	}
`;

export const TodoTextArea = styled.textarea`
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 5px 10px 5px;
	font-size: 1rem;
	box-shadow: 0 0 6px rgba(212, 212, 212, 0.4);
	color: #d4d4d4;
	background-color: #0b0f14;
	resize: none;
`;

export const CancelButton = styled.button`
	border-radius: 5px;
	border-color: #d4d4d4;
	margin: 0 15px 0;
	padding: 10px;
	background: #0b0f14;
	color: white;
	font-size: 0.8rem;
`;

export const CreateButton = styled.button`
	border-radius: 5px;
	border-color: #0b0f14;
	margin: 0 15px 0;
	padding: 10px;
	background: #d4d4d4;
	color: #0b0f14;
	font-size: 1rem;
`;
