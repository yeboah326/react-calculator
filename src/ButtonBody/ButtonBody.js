import React from 'react';
import './ButtonBody.css'
import { Button } from '../Button/Button'

export class ButtonBody extends React.Component{
    render() {
        return (
            <div className="button-body">
                {/* Numbers */}
                <Button value={7} position={"seven"}/>
                <Button value={8} position={"eight"}/>
                <Button value={9} position={"nine"}/>
                <Button value={4} position={"four"}/>
                <Button value={5} position={"five"}/>
                <Button value={6} position={"six"}/>
                <Button value={1} position={"one"}/>
                <Button value={2} position={"two"}/>
                <Button value={3} position={"three"}/>
                <Button value={0} position={"zeros"}/>
                <Button value={"."} position={"dot"}/>

                {/* Operations */}
                <Button value={"DEL"} position={"del"}/>
                <Button value={"x"} position={"multiply"}/>
                <Button value={"/"} position={"divide"}/>
                <Button value={"+"} position={"plus"}/>
                <Button value={"-"} position={"minus"}/>
                <Button value={"="} position={"equal"}/>

            </div>
        )
    }
} 