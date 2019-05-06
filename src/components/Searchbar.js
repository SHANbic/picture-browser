import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
