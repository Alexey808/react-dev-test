import React from 'react';
import OutputComponent from "./components/OutputComponent";
import InputComonent from "./components/InputComponent";

export default class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'React' };
	}

	render() {
	  return(
	  	<div>
	      <InputComonent />
		   <OutputComponent text={this.state.name} />
	  	</div>
	  );
	}
}