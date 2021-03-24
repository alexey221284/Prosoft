import React from "react";
import "./buttonBlock.css"
import plus from "./img/icons/plus/black.svg"
import {useDispatch, useSelector} from "react-redux";
import {addCardsBacklogAction, addCardsDoneAction, addCardsWipAction} from "./store/cardsReducer";

function ButtonBlock() {
	const dispatch = useDispatch()
	const cards = useSelector(state => state.cardsReducer)
	console.log(cards)

	const addCardBacklog = () => {
		const cardBacklog = {
			id: 7,
			title: prompt("введи название задачи"),
			startDate: 19.03,
			endDate: 19.03,
			executor: "Жумаев А.А."
		}
		dispatch(addCardsBacklogAction(cardBacklog));
	}

	const addCardWip = () => {
		const cardWip = {
			id: 8,
			title: prompt("введи название задачи"),
			startDate: 19.03,
			endDate: 19.03,
			executor: "Жумаев А.А."
		}
		dispatch(addCardsWipAction(cardWip))
	}

	const addCardDone = () => {
		const cardDone = {
			id: 9,
			title: prompt("введи название задачи"),
			startDate: 19.03,
			endDate: 19.03,
			executor: "Жумаев А.А."
		}
		dispatch(addCardsDoneAction(cardDone))
	}

	return (
		<div>
			<div className={"buttonBlock"}>
				<div>
					<h3>Сделать</h3>
					<button onClick={() => addCardBacklog()}><img src={plus}/></button>
				</div>
				<div>
					<h3>В процессе</h3>
					<button onClick={() => addCardWip()}><img src={plus}/></button>
				</div>
				<div>
					<h3>Сделано</h3>
					<button onClick={() => addCardDone()}><img src={plus}/></button>
				</div>
			</div>
		</div>
	)
}

export default ButtonBlock;