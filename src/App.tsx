import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Google Translate *</h1>
			<button
				onClick={() => {
					dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' });
				}}
			>
				Cambiar a Espanol
			</button>
			{/* {fromLanguage} */}
		</div>
	);
}

export default App;
