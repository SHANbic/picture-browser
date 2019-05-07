import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <h1>Photo library</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p style={{ fontSize: ".8rem", textAlign: "right" }}>
          <a
            href="https://unsplash.com/"
            title="opens Unsplash website in a new tab"
            target="_blank"
          >
            powered by Unsplash
          </a>
        </p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
