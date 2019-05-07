import React from "react";
import axios from "axios";
import Search from "./Searchbar";

class App extends React.Component {
  onSearchSubmit = term => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 45cea227ff8d63eeb7762c3daf343ba1db929e1b9b11e642e50dd166ff4e0101"
      }
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <Search onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
