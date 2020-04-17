import React from 'react';
import './Calculator.css'
import { Body } from '../Body/Body';


export class Calculator extends React.Component{
    render(){
        return(
            <div className="calculator">
                <Body/>
            </div>
        );
    }
}