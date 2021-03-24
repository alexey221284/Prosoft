import React from "react";
import "./header.css"
import grid from "./img/icons/S-placeholder.svg"
import table from "./img/icons/list.svg"

const Header = () => {
	return (
		<div className={"header"}>
			<h1>Канбан доска</h1>
			<button className={"gridButton"}><img src={grid}/> </button>
			<button className={"tableButton"}><img src={table}/> </button>
		</div>
	)
}

export default Header

