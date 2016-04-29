import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };
class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input 
        value={this.state.term}
        onChange={evt => this.onInputChange(evt.target.value)} />
      </div>
    )
  }
  
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
  // onInputChange(evt) {
  //   console.log(evt.target.value);
  // }
}

export default SearchBar;