import React from "react";
import classes from "./NavigationBar.module.scss";

const NavigationBar = (props) => {

	return (
		<div className={classes.topnav}>
			<a
				className={classes.active}
				href="#home"
			>
				Home
			</a>
			<a href="#contact">My Projects</a>
			<a href="#about">Payments</a>
			<a href="#news">Activity</a>
			<a href="#contact">Settings</a>
		</div>
	);
};

export default React.memo(NavigationBar);
