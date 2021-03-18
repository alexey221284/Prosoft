import React from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
	const dispatch = useDispatch()

	const cards = useSelector(state => state.cards)



	const addCardBacklog = (cards) => {
		dispatch({type: "ADD_CARD_BACKLOG", payload: cards})
	}


	return (
		<div className={'app'}>
			<div style={{display: "flex"}}>
				<button onClick={() => addCardBacklog()}>+ Сделать</button>
			</div>
		</div>
	)
}

export default App;