import React from "react";
import "./Body.css";
import { Screen } from "../Screen/Screen";
import { ButtonBody } from "../ButtonBody/ButtonBody";
import { Button } from "../Button/Button";

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { solved: "", toBeSolved: "32" };
    this.modifyToBeSolved = this.modifyToBeSolved.bind(this);
    this.delToBeSolved = this.delToBeSolved.bind(this);

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
          <Button value={"."} position={"dot"} />

          {/* Operations */}
          <Button value={"DEL"} position={"del"} onClick={this.delToBeSolved} />
          <Button value={"x"} position={"multiply"} />
          <Button value={"/"} position={"divide"} />
          <Button value={"+"} position={"plus"} />
          <Button value={"-"} position={"minus"} />
          <Button value={"="} position={"equal"} />
        </ButtonBody>
      </div>
    );
  }
}
