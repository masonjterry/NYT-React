import React from "react";

const style = {
  divStyle: {
    backgroundColor: "#36f",
    color: "#fff"
  },
  elementStyle: {
    margin: 10,
    color: "#fff"
  }
}

export default class Articles extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <div style={style.divStyle}>
        <h3 style={style.elementStyle}>{this.props.title}</h3>
        <p style={style.elementStyle}>{this.props.summary}</p>
        <a href={this.props.link}><p style={style.elementStyle}>{this.props.link}</p></a>
        {/*<button style={style.elementStyle} onClick={this.handleClick} className="btn btn-secondary">Save Article</button>*/}
      </div>
    );
  }
}
