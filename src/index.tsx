import React from 'react';
import ReactDOM from 'react-dom';

// VIEWS //
import App from './App';

// REDUX //
import { Provider } from "react-redux";
import configureStore from "./redux/Store";

// COMPONENTS //
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

const { persistor, store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		 <PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Switch>

				</Switch>
			</BrowserRouter>
		</PersistGate>
	</Provider>, 
	document.getElementById('app')
);