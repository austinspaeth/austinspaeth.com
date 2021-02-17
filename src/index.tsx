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

// FIXING SAFARI'S STRUGGLES :( //
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const { persistor, store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		 <PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Switch>
                    <Route path="/:project" exact render={(data) => (<App view={'project'} page={data.match.params.project} />) } />
                    <Route path="/" exact render={(data) => (<App view={'home'} page={null} />) } />
				</Switch>
			</BrowserRouter>
		</PersistGate>
	</Provider>, 
	document.getElementById('app')
);