import React from "react";

class Search extends React.Component {
  onHandleChange = (event) => {
    console.log(event.target.value)
  }

  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onClick={this.onHandleClick} onChange={this.onHandleChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
