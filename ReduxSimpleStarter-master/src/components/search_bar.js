import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  //   onInputChange = e => {
  //     //console.log(e.target.value);
  //     this.setState({ term: e.target.value });
  //   };
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
        <br />
        {this.state.term}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
