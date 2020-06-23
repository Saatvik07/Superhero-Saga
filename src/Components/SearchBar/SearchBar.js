import React from "react";
import "./SearchBar.css";
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.search = this.search.bind(this);
  }
  handleChangeInput(event) {
    this.setState({ input: event.target.value });
  }
  search() {
    this.props.onClick(this.state.input);
  }
  render() {
    return (
      <div className='search-container'>
        <input className='search-input' onChange={this.handleChangeInput} placeholder='Enter the name of a superhero' />
        <div className='button-container'>
          <button className='search-btn' onClick={this.search}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
