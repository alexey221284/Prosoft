import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Kanban from "./Kanban";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./store";


ReactDOM.render(
	<Provider store={store}>
		<Kanban />
		<App/>
	</Provider>,
	document.getElementById('root')
);