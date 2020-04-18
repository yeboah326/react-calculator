import React from 'react';
import './Screen.css'

export class Screen extends React.Component{
    render() {
        return(
            <div className='screen'>
                <div className="solved">
                    {this.props.solved}
                </div>
                <div className="toBeSolved">
                    {this.props.toBeSolved}
                </div>
            </div>
        );
    }
}