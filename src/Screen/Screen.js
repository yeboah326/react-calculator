import React from 'react';
import './Screen.css'

export class Screen extends React.Component{
    constructor(props){
        super(props);
        this.state = { solved: "", toBeSolved:""};
    }
    render() {
        return(
            <div className='screen'>

            </div>
        );
    }
}