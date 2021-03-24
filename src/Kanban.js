// import React from "react";
// import './kanban.css'
// import { DragDropContext, DropTarget, DragSource } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
// import update from "immutability-helper";
// import {defaultState as store} from "./store/cardsReducer";
// import ButtonBlock from "./ButtonBlock";
//
// const channels = ["backlog", "wip", "done"];
//
// /*const labelsMap = {
// 	backlog: "Сделать",
// 	wip: "В процессе",
// 	done: "Сделано"
// };*/
//
// const classes = {
// 	board: {
// 		display: "flex",
// 		margin: "0 auto",
// 		width: "90vw",
// 		fontFamily: 'Arial, "Helvetica Neue", sans-serif'
// 	},
// 	column: {
// 		minWidth: 200,
// 		width: "30vw",
// 		height: "80vh",
// 		margin: "0 auto",
// 		backgroundColor: "#FFF"
// 	},
// 	columnHead: {
// 		textAlign: "center",
// 		padding: 10,
// 		fontSize: "1.2em",
// 		backgroundColor: "#FFF"
// 	},
// 	item: {
// 		padding: 10,
// 		margin: 10,
// 		fontSize: "1em",
// 		cursor: "pointer",
// 		backgroundColor: "lightgray"
// 	}
// };
//
// class Kanban extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			store
// 		};
// 	}
// 	update = (id, status) => {
// 		const { store } = this.state;
// 		const task = store.cards.find(task => task._id === id);
// 		task.status = status;
// 		const taskIndex = store.cards.indexOf(task);
// 		const newTasks = update(store, {
// 			[taskIndex]: { $set: task }
// 		});
// 		this.setState({ store: newTasks });
// 	};
//
// 	render() {
// 		const { store } = this.state;
// 		return (
// 			<main>
// 				<ButtonBlock />
// 				<section style={classes.board}>
// 					{channels.map(channel => (
// 						<KanbanColumn status={channel}>
// 							<div style={classes.column}>
// 								{/*<div style={classes.columnHead}>{labelsMap[channel]}</div>*/}
// 								<div>
// 									{store.cards
// 										.filter(item => item.status === channel)
// 										.map(item => (
// 											<KanbanItem id={item._id} onDrop={this.update}>
// 												<div style={classes.item}>
// 													<span style={classes.item}>{item.title}</span>
// 													<span style={classes.item}>{item.startDate}</span>
// 													<span style={classes.item}>{item.endDate}</span>
// 													<span style={classes.item}>Исполнитель:{item.executor}</span>
// 												</div>
// 											</KanbanItem>
// 										))}
// 								</div>
// 							</div>
// 						</KanbanColumn>
// 					))}
// 				</section>
// 			</main>
// 		);
// 	}
// }
//
// export default DragDropContext(HTML5Backend)(Kanban);
//
// const boxTarget = {
// 	drop(props) {
// 		return { name: props.status };
// 	}
// };
//
// class KanbanColumn extends React.Component {
// 	render() {
// 		return this.props.connectDropTarget(<div>{this.props.children}</div>);
// 	}
// }
//
// KanbanColumn = DropTarget("kanbanItem", boxTarget, (connect, monitor) => ({
// 	connectDropTarget: connect.dropTarget(),
// 	isOver: monitor.isOver(),
// 	canDrop: monitor.canDrop()
// }))(KanbanColumn);
//
// const boxSource = {
// 	beginDrag(props) {
// 		return {
// 			name: props.id
// 		};
// 	},
//
// 	endDrag(props, monitor) {
// 		const item = monitor.getItem();
// 		const dropResult = monitor.getDropResult();
// 		if (dropResult) {
// 			props.onDrop(monitor.getItem().name, dropResult.name);
// 		}
// 	}
// };
//
// class KanbanItem extends React.Component {
// 	render() {
// 		return this.props.connectDragSource(<div>{this.props.children}</div>);
// 	}
// }
//
// KanbanItem = DragSource("kanbanItem", boxSource, (connect, monitor) => ({
// 	connectDragSource: connect.dragSource(),
// 	isDragging: monitor.isDragging()}))(KanbanItem);