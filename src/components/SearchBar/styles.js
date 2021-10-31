import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg';

export const SeachBarContainer = styled.div`
	display: flex;
	width: 165px;
	height: 30px;
	padding: 5px;
	margin-top: 15px;
	margin-bottom: 15px;
	margin-left: auto;
	background: #d3d3d3;
	border-radius: 60px;
`;

export const InputSearch = styled.input`
	width: 130px;
	background: #d3d3d3;
	color: #59adff;
	border: none;
	outline: none;

	&::placeholder {
		color: #59adff;
	}
`;

export const SearchButton = styled.button`
	width: 20px;
	height: 20px;
	background-color: transparent;
	background-image: url(${SearchIcon});
	background-repeat: no-repeat;
	background-size: contain;
	border: none;
	outline: none;
`;
