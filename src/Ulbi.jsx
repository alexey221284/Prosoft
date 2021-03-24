import React, {useState} from 'react';
import './ulbi.css'
import {defaultState2} from "./store/cardsReducer";
import ButtonBlock from "./ButtonBlock";

const Ulbi = () => {

	const [boards, setBoards] = useState(defaultState2.card2)

	const [currentBoard, setCurrentBoard] = useState(null)
	const [currentItem, setCurrentItem] = useState(null)

	function dragOverHandler(e) {
		e.preventDefault()
		if (e.target.className == 'item') {
			e.target.style.boxShadow = '0 4px 3px gray'
		}
	}

	function dragLeaveHandler(e) {
		e.target.style.boxShadow = 'none'
	}

	function dragStartHandler(e, board, item) {
		setCurrentBoard(board)
		setCurrentItem(item)
	}

	function dragEndHandler(e, board, item) {
		e.target.style.boxShadow = 'none'
	}

	function dropHandler(e, board, item) {
		e.preventDefault()
		const currentIndex = currentBoard.items.indexOf(currentItem)
		currentBoard.items.splice(currentIndex, 1)
		const dropIndex = board.items.indexOf(item)
		board.items.splice(dropIndex + 1, 0,currentItem)
		setBoards(boards.map(b => {
			if(b.id === board.id) {
				return board
			}
			if(b.id === currentBoard.id) {
				return currentBoard
			}
			return b
		}))
		e.target.style.boxShadow = 'none'
	}

	function dropCardHandler(e, board) {
		board.items.push(currentItem)
		const currentIndex = currentBoard.items.indexOf(currentItem)
		currentBoard.items.splice(currentIndex, 1)
		setBoards(boards.map(b => {
			if(b.id === board.id) {
				return board
			}
			if(b.id === currentBoard.id) {
				return currentBoard
			}
			return b
		}))
		e.target.style.boxShadow = 'none'
	}

	return (
		<div>
		<ButtonBlock />
		<div className={'app'}>
			{boards.map(board =>
				<div
					className={'board'}
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropCardHandler(e, board)}
				>
					<div className={'board__title'}>{board.title}</div>
					{board.items.map(item =>
						<div
							onDragOver={(e) => dragOverHandler(e)}
							onDragLeave={e =>dragLeaveHandler(e)}
							onDragStart={(e) => dragStartHandler(e, board, item)}
							onDragEnd={(e) => dragEndHandler(e, board, item)}
							onDrop={(e) => dropHandler(e, board, item)}
							
							draggable={true}
							className={'item'}
						>
							<div>{item.id} {item.title}</div>
							<div>
								<span>{item.startDate}</span><span>{item.endDate}</span>
							</div>
							<div>{item.executor}</div>
						</div>
					)}
				</div>
			)}
		</div>
		</div>
	)
}

export default Ulbi