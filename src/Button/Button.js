import React from 'react';
import './Button.css';

export class Button extends React.Component{
    render() {
        return (
            <button className={this.props.position}>
                {this.props.value}
            </button>
        )
    }
}