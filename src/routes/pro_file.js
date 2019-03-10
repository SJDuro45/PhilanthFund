import React, { Component } from 'react';
import Page from './profile.html'

const htmlDoc = {_html: Page}''

const htmlFile = require('profile.html');

// class TemplateHTMLComponent extends Component {
//     render() {
//         return (
//         	<div dangerouslySetInnerHTML={{ __html: htmlFile}}
//         );
//     }
// }


export default class Doc extends Component { 
	constructor(props) {
		super(props);
	}

	render() {
		return (<div dangerouslySetInnerHTML={htmlDoc} />)
	}

}