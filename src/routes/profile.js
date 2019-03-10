import React, { Component } from 'react';



const htmlFile = require('profile.html');

class TemplateHTMLComponent extends Component {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: htmlFile}};
    }
}