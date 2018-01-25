import React from "react";
import Search from "./Search";
import Articles from "./Articles";

const style = {
  navbar: {
    backgroundColor: "#36f",
    color: "#fff"
  },
  navLink: {
    color: "#fff"
  }
}

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav style={style.navbar} className="navbar navbar-expand-lg">
          <a style={style.navLink} className="navbar-brand" href="/">NYT-React</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a style={style.navLink} className="nav-link active" href="/">| Home</a>
              </li>
              <li className="nav-item">
                <a style={style.navLink} className="nav-link" href="/saved">| Saved</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="jumbotron text-center">
          <h1>New York Times</h1>
          <p>The New York Times right at you fingertips</p>
        </div>
        <Search />
        <Articles />
      </div>
    );
  }
}
