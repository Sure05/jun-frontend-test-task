import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/index";
import WebsocketProvider from "./App/components/WebSocketContext";
import {store} from './App/store'
import {Provider} from 'react-redux';
import {setToLS} from "./App/assets/storage";
import * as themes from "./App/themes/schema.json";

setToLS('all-themes', themes.default);

ReactDOM.render(
	<Provider store={store}>
		<WebsocketProvider>
			<App/>
		</WebsocketProvider>
	</Provider>,
	document.getElementById('root')
);

