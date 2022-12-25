import React from "react";

class ToWrite extends React.Component {

  render() {
    return (    
      <div style={this.props.style}>
      <p>{this.props.text || 'aa'}</p>

      </div>
    )
  }
}

export default ToWrite;