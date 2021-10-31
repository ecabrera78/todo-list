import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TodoList } from './containers/TodoList';
import { GlobalStyle } from './GlobalStyles';

export const App = () => (
	<>
		<GlobalStyle />
		<Header />
		<SearchBar />
		<TodoList />
	</>
);
