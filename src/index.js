import React from 'react';
import ReactDOM from 'react-dom';

import { StyledDemo } from './StyledDemo.jsx';
import { MakeStylesDemo } from './MakeStylesDemo.jsx';

function App() {
	return (
		<div className="App">
			Hello!
			<StyledDemo color="blue" />
			<MakeStylesDemo color="blue" />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
