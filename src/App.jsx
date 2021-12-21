import React from 'react';
import './App.scss';

import useToken from './Hooks/useToken';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
	const [token] = useToken();

	// Validation token
	// const [ok, setOk] = React.useState(false);

	// React.useEffect(() => {
	// 	fetch('....', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(token),
	// 	}).then((response) => {
	// 		if (response.status === 200) {
	// 			setOk(true);
	// 		}
	// 	});
	// }, [token]);

	if (token) {
		return <AuthenticatedApp />;
	} else {
		return <UnauthenticatedApp />;
	}
}

export default App;
