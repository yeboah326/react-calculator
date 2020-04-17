import React from 'react';
import './Body.css'
import { Screen } from '../Screen/Screen';
import { ButtonBody } from '../ButtonBody/ButtonBody';

export class Body extends React.Component{
    render() {
        return(
            <div className='body'>
                <Screen/>
                <ButtonBody/>
            </div>
        );
    }
}