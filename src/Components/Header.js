import React from "react";
import classes from "./Header.module.css";
import oval from "../Images/egg.png";
import bell from "../Images/bell.png";

const Header = (props) => {
	return (
		<div className={classes["header-container"]}>
			<div className={classes.header}>
				<img
					className={classes.logo}
					alt="logo"
					src={oval}
				/>
				<p className={classes.first}>Dash</p>
				<p className={classes.second}>Elements</p>
			</div>
			<div className={classes["profile-container"]}>
				<div className={classes.notification}>
						<img
							className={classes.bell}
							alt="notification"
							src={bell}
						/>
					<span className={classes["badge-count"]}>3</span>
				</div>

				<p className={classes.user}>Alex Doe</p>
				<select className={classes["custom-select"]}></select>
			</div>
		</div>
	);
};

export default Header;
