import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodosProvider';
import { SeachBarContainer, InputSearch, SearchButton } from './styles';

export const SearchBar = () => {
	const { searchText, setSearchText } = useContext(TodoContext);

	const handleOnChange = e => {
		setSearchText(e.target.value);
	};

	return (
		<SeachBarContainer>
			<InputSearch
				type='text'
				placeholder='Search...'
				value={searchText}
				onChange={handleOnChange}
			/>
			<SearchButton></SearchButton>
		</SeachBarContainer>
	);
};
