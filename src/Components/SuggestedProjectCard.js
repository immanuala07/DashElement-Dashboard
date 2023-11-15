import React from "react";
import classes from "./SuggestedProjectCard.module.scss";

const SuggestedProjectsCard = ({ projects }) => {

	return projects.map((data) => (
		<li key={data.id}>
			<div className={classes.card}>
				<div className={classes.header}>
					<div className={classes["image-container"]}>
						<img
							src={data.img}
							alt={data.name}
							className={classes.image}
						/>
					</div>
					<div className={classes["profile-container"]}>
						<p className={classes.name}>{data.name}</p>
						<p className={classes.timestamp}>{data.updatedTime}</p>
					</div>
					<div className={classes["tag-container"]}>
						<p className={classes.tag}>{data.tag}</p>
					</div>
				</div>
				<div className={classes.description}>
					<p>{data.description}</p>
				</div>

				<hr />
				<div className={classes.units}>
					<p className={classes.eth}>{data.eth}</p>
					<p className={classes.btc}>{data.btc}</p>
					<p className={classes.price}>
						<span className={classes["gray-font"]}>$</span>
						{data.price}
					</p>
				</div>
			</div>
		</li>
	));
};

export default React.memo(SuggestedProjectsCard);
