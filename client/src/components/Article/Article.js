import axios from "axios";
import React, { Component, Fragment } from "react";

import "./Article.css";

class Article extends Component {
	constructor() {
		super();
		this.state = { data: "" };
	}

	async componentDidMount() {
		const pathname = this.getURLPathname();
		try {
			const response = await axios.post("/articles/article", { pathname }); //localhost
			this.changeURL(response.data[0].Heading);
			this.setState({ data: response.data[0].Content });
		} catch (err) {
			console.error("didmount-Article", err);
		}
	}

	getURLPathname() {
		let pathname = window.location.pathname.split("/")[2];
		return pathname;
	}

	changeURL(data) {
		const url = this.dashedString(data);
		window.history.replaceState(null, "", url);
	}

	dashedString(str) {
		return str.split(" ").join("-");
	}

	render() {
		return (
			<Fragment>
				<p className="container article">{this.state.data}</p>
			</Fragment>
		);
	}
}

export default Article;
