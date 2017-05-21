import React, { Component } from 'react';


class App extends Component {
  render() {
    const divStyle = {
      width: this.props.current + "%",
      height: 30 + 'px',
      backgroundColor: '#4CAF50',
      textAlign: 'center',
      lineHeight: 30 + 'px',
      color: 'white'
    }
    return (
      <div className="myProgress">
        <div className="myBar" style={divStyle}>{this.props.current + "%"}</div>
      </div>
    );
  }
}

export default App;
