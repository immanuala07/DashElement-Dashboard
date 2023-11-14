import React from "react";
import Chart from "react-apexcharts";

import classes from "./Dashboard.module.css";
import star from "../Images/star.png";
import code from "../Images/code.png";

const chartData = {
	series: [
		{
			name: "$",
			data: [145, 210, 175, 200, 0, 226, 140, 185, 170, 200, 185, 230]
		}
	],
	options: {
		chart: {
			height: 220,
			type: "line",
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: "straight"
		},
		grid: {
			row: {
				colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
				opacity: 0.5
			}
		},
		xaxis: {
			categories: [
				"Mar",
				"",
				"May",
				"",
				"Jul",
				"",
				"Sep",
				"",
				"Nov",
				"",
				"Jan",
				""
			]
		}
	}
};

const Dashboard = (props) => {

	return (
		<div className={classes.cards}>
			<div className={classes.card + " " + classes.earnings}>
				<div className={classes["earnings-container"]}>
					<p
						className={
							classes.title +
							" " +
							classes["gray-font"] +
							" " +
							classes["font-bold"]
						}
					>
						earnings
					</p>
					<p className={classes["price-container"]}>
						<span className={classes.price + " " + classes["gray-font"]}>
							$
						</span>
						2878.90
					</p>
					<p className={classes.stats}>
						<span className={classes["green-font"]}>+42</span>
						<span className={classes.facts}>&nbsp;since last week</span>
					</p>

					<p className={classes.eth}>0.9087 ETH</p>
					<p className={classes.btc}>0.5 BTC</p>
				</div>
				<div className={classes["graph-container"]}>
					<Chart
						options={chartData.options}
						series={chartData.series}
						type="line"
						height={220}
					/>
				</div>
			</div>
			<div className={classes.card}>
				<div className={classes.specs}>
					<div className={classes["rank-container"]}>
						<p className={classes["rank-title"]}>rank</p>
						<div className={classes["icon-container"]}>
							<img
								className={classes["star-icon"]}
								alt="rank"
								src={star}
							/>
						</div>
						<div className={classes["value-container"]}>
							<p className={classes["star-value"]}>607</p>
						</div>
						<p className={classes.description}>
							You're in top <span className={classes["green-font"]}>40%</span>
						</p>
						{/* <section></section> */}
					</div>
					<div className={classes["projects-container"]}>
						<p className={classes["projects-title"]}>projects</p>
							<div className={classes["second-icon-container"]}>
								<img
									className={classes["code-icon"]}
									alt="code"
									src={code}
								/>
							</div>
							<div className={classes["value-container"]}>
								<p className={classes["code-value"]}>45</p>
							</div>
						<p className={classes.description}>
							<span className={classes["green-font"]}>10</span> in this month
						</p>
					</div>
					<hr />
					<div className={classes["categories-container"]}>
						<p className={classes["categories-title"]}>top categories</p>
						<section className={classes["categories-section"]}>
							<p className={classes.categories}>ruby</p>
							<p className={classes.categories}>clojure</p>
							<p className={classes.categories}>java</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Dashboard);
