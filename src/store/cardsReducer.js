/*export const defaultState = {
	cards: [
		{
			_id: 1,
			title: "Прочитать книгу",
			startDate: 12.06,
			endDate: 12.06,
			executor: "Иванов И. В.",
			status: "backlog"
		},
		{
			_id: 2,
			title: "Прочитать книгу",
			startDate: 12.06,
			endDate: 12.06,
			executor: "Иванов И. В.",
			status: "backlog"
		},
		{
			_id: 3,
			title: "Прочитать книгу",
			startDate: 12.06,
			endDate: 12.06,
			executor: "Иванов И. В.",
			status: "wip"
		},
		{
			_id: 4,
			title: "Прочитать книгу",
			startDate: 12.06,
			endDate: 12.06,
			executor: "Иванов И. В.",
			status: "wip"
		},
		{
			_id: 5,
			title: "Прочитать книгу",
			startDate: 12.06,
			endDate: 12.06,
			executor: "Иванов И. В.",
			status: "done"
		},
		{
			_id: 6,
			title: "Прочитать книгу",
			startDate: 12.06,
			endDate: 12.06,
			executor: "Иванов И. В.",
			status: "done"
		},
	]
}*/

import {useSelector} from "react-redux";

export const defaultState2 = {
	card2: [
		{id: 1, title: "Сделать", items: [
				{id: 1, title: "Прочитать книгу", startDate: 12.06, endDate: 12.06, executor: "Иванов И. В."},
				{id: 2, title: "Прочитать книгу", startDate: 12.06, endDate: 12.06, executor: "Иванов И. В."}
			]},
		{id: 2, title: "В процессе", items: [
				{id: 3, title: "Прочитать книгу", startDate: 12.06, endDate: 12.06, executor: "Иванов И. В."},
				{id: 4, title: "Прочитать книгу", startDate: 12.06, endDate: 12.06, executor: "Иванов И. В."}
			]},
		{id: 3, title: "Сделано", items: [
				{id: 5, title: "Прочитать книгу", startDate: 12.06, endDate: 12.06, executor: "Иванов И. В."},
				{id: 6, title: "Прочитать книгу", startDate: 12.06, endDate: 12.06, executor: "Иванов И. В."}
			]}
	]
}

const ADD_CARD_BACKLOG = "ADD_CARD_BACKLOG"
const ADD_CARD_WIP = "ADD_CARD_WIP"
const ADD_CARD_DONE = "ADD_CARD_BACKLOG"

export const cardsReducer = (state = defaultState2, action) => {
	switch (action.type) {
		case "ADD_CARD_BACKLOG":
			//return {card2: [...state.card2, action.payload]} работает но криво
			return {
				card2: [
					{id:1, title: "Сделать", items: [...state.card2[0].items, action.payload]},
					state.card2[1],
					state.card2[2],
				]
			}
		case "ADD_CARD_WIP":
			return {...state, cards: state.cards}
		case "ADD_CARD_DONE":
			return {...state, cards: state.cards}

		default:
			return state
	}
}

export const addCardsBacklogAction = (payload) => ({type: ADD_CARD_BACKLOG, payload})
export const addCardsWipAction = (payload) => ({type: ADD_CARD_WIP, payload})
export const addCardsDoneAction = (payload) => ({type: ADD_CARD_DONE, payload})