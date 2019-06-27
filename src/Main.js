import React from 'react';
import OutputCmp from "./components/OutputCmp";
import InputCmp from "./components/InputCmp";

export default class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'React' };
	}

	render() {
	  return(
	  	<div>
	      <InputCmp />
		   <OutputCmp text={this.state.name} />
	  	</div>
	  );
	}
}