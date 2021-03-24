import React from 'react'
import ReactDOM from 'react-dom'
import Kanban from "./Kanban";
import {Provider} from "react-redux";
import {store} from "./store";
import Header from "./Header";
import Ulbi from "./Ulbi";


ReactDOM.render(
	<Provider store={store}>
		<Header/>
		<Ulbi/>
		{/*<Kanban />*/}
	</Provider>,
	document.getElementById('root')
);