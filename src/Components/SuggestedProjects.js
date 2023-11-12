import classes from "./SuggestedProjects.module.css";
import SuggestedProjectsCard from "./SuggestedProjectCard";

const SuggestedProjects = (props) => {
	return (
		<>
			<div className={classes.heading}>
				<p className={classes['heading-title']}>Suggested Projects</p>
				<a className={classes['heading-anchor']} href="#idx">view all projects&#8594;</a>
			</div>
			<ul className={classes.cards}>
				<SuggestedProjectsCard/>
			</ul>
		</>
	);
};

export default SuggestedProjects;
