import React from 'react';
import './ButtonBody.css'

export class ButtonBody extends React.Component{
    render() {
        return (
            <div className="button-body">
                {this.props.children}
            </div>
        )
    }
} 