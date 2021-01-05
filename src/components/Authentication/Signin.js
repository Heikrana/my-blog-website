import React, { Component, Fragment } from "react";

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = { id: "", password: "" };
	}

	render() {
		return (
			<Fragment>
				<form>
					<div className="id-field">
						<label for="email-id">Enter ID: </label>
						<input
							id="email-id"
							type="email"
							value={this.state.id}
							onChange={(inp) => {
								this.setState({ id: inp.target.value });
							}}
						></input>
					</div>
					<div className="pass-field">
						<label for="password">Enter Password</label>
						<input
							id="password"
							type="password"
							value={this.state.password}
							onChange={(inp) => {
								this.setState({ password: inp.target.value });
							}}
						></input>
					</div>
				</form>
			</Fragment>
		);
	}
}

export default Signin;
