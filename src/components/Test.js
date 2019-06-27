import React, { Component } from 'react';

// простой react элемент
const elementText = 'text';

// react элемент
const elementDom = <span className='elem'>{elementText} and {toUpperCase(elementText)}</span>;
function toUpperCase(text) {
	return text.toUpperCase();
}

// функциональный компонент
function MyFunctionComponent() {
	return <div>My function component: {elementDom}</div>
}

// component | list no key
function ComponentList() {
	const numbers = [1, 2, 3, 4, 5];
	const numbersList = numbers.map((number) =>
		<li>{number}</li>
	);

	const objects = [{id: 1, text: 'text1'}, {id: 2, text: 'text2'}, {id: 3, text: 'text3'}];
	const objectList = objects.map((obj) =>
		<li key={obj.id}>{obj.text}</li>
	);

	return <div>
		NumbersList: {numbersList}
		ObjectsList: {objectList}
	</div>
}



// функциональный компонент с пропсами
function MyFunctionComponentWithProps(props) {
	return <div>My function component with props: {props.text}</div>
}

// классовый компонент с состоянием
class MyClassComponentWithState extends React.Component {
	constructor() {
		super();
		this.state = {
			content: elementDom
		}
	}
	render() {
		return <div>My class component: {this.state.content}</div>;
	}
}

// component | props | state, setState | lifecycle
class MyClassComponentWithLifecycle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			test: 'init text'
		}
	}

	componentDidMount() {
		console.log('componentDidMount');
		this.setState((state, props) => ({
			test: state.test + ' + ' + props.testprops
		}));
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}


	render() {
		return <div>
			{this.state.test}
		</div>
	}
}


export class Test extends React.Component {
	render() {
		return <div>
			React element: {elementText}
			React element: {elementDom}
			<br/>
			<MyFunctionComponent/>
			<MyFunctionComponentWithProps text='Text props'/>
			<MyClassComponentWithState/>
			<MyClassComponentWithLifecycle testprops='testprops'/>
			<ComponentList/>

		</div>;
	}
}


