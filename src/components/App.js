import React from "react";
import axios from "axios";
import Search from "./Searchbar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 45cea227ff8d63eeb7762c3daf343ba1db929e1b9b11e642e50dd166ff4e0101"
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <Search onSubmit={this.onSearchSubmit} />
        <p>Found {this.state.images.length} images</p>
      </div>
    );
  }
}

export default App;
