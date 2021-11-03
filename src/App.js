import React, { useContext } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { Modal } from './components/AddTodoModal';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TodoList } from './containers/TodoList';
import { TodoContext } from './context/TodosProvider';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
	const { isVisible, setIsVisible } = useContext(TodoContext);

	return (
		<>
			<GlobalStyle />
			<Header />
			<SearchBar />
			<TodoList />

			{isVisible && (
				<Modal>
					<AddTodoForm setIsVisible={setIsVisible} />
				</Modal>
			)}
		</>
	);
};
