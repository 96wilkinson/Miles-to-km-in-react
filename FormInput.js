import React from 'react';

export default class FormInput extends React.Component {
    render() {
        return <input type={this.props.type || 'text'} //shorthand for type = {this.prop.type ? this.props.type: 'text'} so its the type of the prop or text. Can be any type I want
            placeholder={this.props.place || this.props.name || ''} // placeholder(place) is putting the text in the box before you enter or its name or nothing 
            onChange={this.props.handleChange} // handler for change
            value={this.props.value || ''} // the value currently in the input
            name={this.props.name || ''} />; //  the names are used to link the inputs to other things. input field won't get pulled through without a name
    }
}

