import classes from "./Card.module.css";

const Card = (props) => {
	return (
		<div className={classes.card}>
			{/* <img /> */}
			<div className={classes.container}>
				<h4>
					<b>John Doe</b>
				</h4>
				<p>Architect & Engineer</p>
			</div>
		</div>
	);
};

export default Card;
