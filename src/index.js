import React from 'react';
import ReactDOM from 'react-dom';

import { StyledDemo } from './StyledDemo.jsx';
import { MakeStylesDemo } from './MakeStylesDemo.jsx';
import Other from './Other.jsx';

function App() {
	React.useRef();
	return (
		<div className="App">
			Hello!
			<StyledDemo />
			<MakeStylesDemo color="blue" />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
