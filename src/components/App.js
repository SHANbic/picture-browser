import React from "react";
import Search from "./Searchbar";

class App extends React.Component {
  onSearchbarSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <Search onSubmit={this.onSearchbarSubmit}/>
      </div>
    );
  }
}

export default App;
