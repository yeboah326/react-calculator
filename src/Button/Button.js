import React from 'react';
import './Button.css';

export class Button extends React.Component{
    render() {
        return (
            <button className={this.props.position} onClick={this.props.onClick} value={this.props.value}>
                {this.props.value}
            </button>
        )
    }
}