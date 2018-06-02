import React from "react";
//Initialize Component
class SearchBar extends React.Component{
  render(){
    return(
      <div>Search Bar
      <form onSubmit={this.props.getItem}>
        <input type="text" name="Items" placeholder ="Enter Name of Item" />
        <button>Search item</button>
      </form>

      </div>
    );
  }
}
export default SearchBar;
