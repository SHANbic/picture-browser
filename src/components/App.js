import React from "react";
import unsplash from "../api/unsplash";
import Search from "./Searchbar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
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
