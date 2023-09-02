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

function reducer(state, action) {
	const{type}=action

	if(type !== 'INTERCHANGE_LANGUAGES'){
		return{
			...state,
			fromLanguage: state.toLanguage,
			toLanguage: state.fromLanguage
		}
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='App'>
			<h1>Google Translate *</h1>
		</div>
	);
}

export default App;
