import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import './App.css';

const initialState = {
	formLanguage: 'auto',
	toLanguage: 'en',
	formText: '',
	result: '',
	loading: 'flase',
};

function reducer(state, action) {}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='App'>
			<h1>Google Translate *</h1>
		</div>
	);
}

export default App;
