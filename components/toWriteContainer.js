import React from "react";
import ToWrite from "./ToWrite";

class ToWriteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setStyle.bind(this);
    this.joinArr.bind(this);
  }

  joinArr() {
    let joined = this.props.letterArr.join("");
    console.log(this.props.upperCase);
    if (this.props.upperCase) joined = joined.toUpperCase()
    return joined;
  }

  setStyle() {
    let style = {
      width: "100vh",
      height: "20vw",
      backgroundColor: "white",
      fontSize: "25px",
      border: "1px solid black",
    };
    return style;
  }

  render() {
    return <ToWrite style={this.setStyle()} text={this.joinArr()} />;
  }
}

export default ToWriteContainer;