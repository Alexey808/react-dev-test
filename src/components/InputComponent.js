import React from 'react';

export default class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({inputValue: e.target.value});
		console.log(this.state.inputValue);
	}

	render() {
		const inputValue = this.state.inputValue;
		return (
			<div>
				<input value={inputValue} onChange={this.handleChange}/>
			</div>
		)
	}

}