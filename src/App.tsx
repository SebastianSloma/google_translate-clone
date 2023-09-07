import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useReducer } from 'react';
import './App.css';
import { useStore } from './hooks/useStore';

function App() {
	const { fromLanguage, setFromLanguage } = useStore();
	return (
		<div className='App'>
			<h1>Google Translate *</h1>
			<button
				onClick={() => {
					setFromLanguage('es');
				}}
			>
				Cambiar a Espanol
			</button>
			{/* {fromLanguage} */}
		</div>
	);
}

export default App;
