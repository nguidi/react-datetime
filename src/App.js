// This file is the playground used for development purposes (npm run playground)
// not part of the library
import React from 'react';
import Datetime from './DateTime/DateTime.js';

import './DateTime.scss'

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

class App extends React.Component { 
	state = {
		date: new Date()
	}

	render() {
		return (
			<div>
				<Datetime locale="es" preventNavigation={true}/>
			</div>
		);
	}
}

export default App;
