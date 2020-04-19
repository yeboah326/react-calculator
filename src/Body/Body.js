import React from "react";
import "./Body.css";
import { Screen } from "../Screen/Screen";
import { ButtonBody } from "../ButtonBody/ButtonBody";
import { Button } from "../Button/Button";

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { solved: "", toBeSolved: "" };
    this.modifyToBeSolved = this.modifyToBeSolved.bind(this);
    this.delToBeSolved = this.delToBeSolved.bind(this);
    this.equalToPressed = this.equalToPressed.bind(this)
  }

  equalToPressed() {
    this.setState({
      solved : eval(this.state.toBeSolved),
      toBeSolved: ""
    })
  }
  modifyToBeSolved (e){
    this.setState({
      toBeSolved: this.state.toBeSolved + e.target.value,
    });
}

    delToBeSolved (){
        this.setState({
          toBeSolved: this.state.toBeSolved.slice(0, (this.state.toBeSolved).length - 1),
        });
    
  }

  render() {
    return (
      <div className="body">
        <Screen solved={this.state.solved} toBeSolved={this.state.toBeSolved} />
        <ButtonBody>
          {/* Numbers */}
          <Button value={7} position={"seven"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={8} position={"eight"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={9} position={"nine"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={4} position={"four"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={5} position={"five"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={6} position={"six"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={1} position={"one"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={2} position={"two"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={3} position={"three"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={0} position={"zeros"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={"."} position={"dot"} onClick={e => this.modifyToBeSolved(e)}/>

          {/* Operations */}
          <Button value={"DEL"} position={"del"} onClick={this.delToBeSolved} />
          <Button value={"*"} position={"multiply"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={"/"} position={"divide"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={"+"} position={"plus"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={"-"} position={"minus"} onClick={e => this.modifyToBeSolved(e)}/>
          <Button value={"="} position={"equal"} onClick={this.equalToPressed} />
        </ButtonBody>
      </div>
    );
  }
}
