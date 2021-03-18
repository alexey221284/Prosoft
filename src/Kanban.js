import React from "react";
import { DragDropContext, DropTarget, DragSource } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import {defaultState} from "./store/cardsReducer";

const channels = ["backlog", "wip", "done"];

const labelsMap = {
	backlog: "Сделать",
	wip: "В процессе",
	done: "Сделано"
};

const classes = {
	board: {
		display: "flex",
		margin: "0 auto",
		width: "90vw",
		fontFamily: 'Arial, "Helvetica Neue", sans-serif'
	},
	column: {
		minWidth: 200,
		width: "30vw",
		height: "80vh",
		margin: "0 auto",
		backgroundColor: "#FFF"
	},
	columnHead: {
		textAlign: "center",
		padding: 10,
		fontSize: "1.2em",
		backgroundColor: "#FFF"
	},
	item: {
		padding: 10,
		margin: 10,
		fontSize: "1em",
		cursor: "pointer",
		backgroundColor: "lightgray"
	}
};

class Kanban extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultState
		};
	}
	update = (id, status) => {
		const { defaultState } = this.state;
		const task = defaultState.find(task => task._id === id);
		task.status = status;
		const taskIndex = defaultState.indexOf(task);
		const newTasks = update(defaultState, {
			[taskIndex]: { $set: task }
		});
		this.setState({ defaultState: newTasks });
	};

	render() {
		const { tasks } = this.state;
		return (
			<main>
				<header> Канбан доска </header>
				<section style={classes.board}>
					{channels.map(channel => (
						<KanbanColumn status={channel}>
							<div style={classes.column}>
								<div style={classes.columnHead}>{labelsMap[channel]}</div>
								<div>
									{defaultState
										.filter(item => item.status === channel)
										.map(item => (
											<KanbanItem id={item._id} onDrop={this.update}>
												<div style={classes.item}>
													<span style={classes.item}>{item.title}</span>
													<span style={classes.item}>{item.startDate}</span>
													<span style={classes.item}>{item.endDate}</span>
													<span style={classes.item}>Исполнитель:{item.executor}</span>
												</div>

											</KanbanItem>
										))}
								</div>
							</div>
						</KanbanColumn>
					))}
				</section>
			</main>
		);
	}
}

export default DragDropContext(HTML5Backend)(Kanban);

const boxTarget = {
	drop(props) {
		return { name: props.status };
	}
};

class KanbanColumn extends React.Component {
	render() {
		return this.props.connectDropTarget(<div>{this.props.children}</div>);
	}
}

KanbanColumn = DropTarget("kanbanItem", boxTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(KanbanColumn);

const boxSource = {
	beginDrag(props) {
		return {
			name: props.id
		};
	},

	endDrag(props, monitor) {
		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
		if (dropResult) {
			props.onDrop(monitor.getItem().name, dropResult.name);
		}
	}
};

class KanbanItem extends React.Component {
	render() {
		return this.props.connectDragSource(<div>{this.props.children}</div>);
	}
}

KanbanItem = DragSource("kanbanItem", boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()}))(KanbanItem);