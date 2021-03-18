export const defaultState =
		[
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

export const cardsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_CARD_BACKLOG":
			return {...state, cards: state.cards + "BACKLOG"}
		case "ADD_CARD_WIP":
			return {...state, cards: state.cards + "WIP"}
		case "ADD_CARD_DONE":
			return {...state, cards: state.cards + "DONE"}

		default:
			return state
	}
}