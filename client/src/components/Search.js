import React from "react";

const style = {
  marginTop: 10,
  formStyle: {
    backgroundColor: "#36f"
  }
}

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      beginYear: "",
      endYear: ""
    }
  }

  resetForms = () => {
    this.setState({
      searchTitle: "",
      beginYear: "",
      endYear: ""
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })

  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.resetForms();
  }

  render() {
    return (
      <div>
        <form style={style.formStyle} className="form-control">
          <input style={style} className="form-control" type="text" name="searchTitle" placeholder="Search" onChange={this.handleChange} value={this.state.searchTitle} />
          <input style={style} className="form-control" type="text" name="beginYear" placeholder="Beginning Year" onChange={this.handleChange} value={this.state.beginYear} />
          <input style={style} className="form-control" type="text" name="endYear" placeholder="Ending Year" onChange={this.handleChange} value={this.state.endYear} />
          <button style={style} className="btn btn-secondary" onClick={this.handleClick}>Search</button>
        </form>
      </div>
    );
  }
}
