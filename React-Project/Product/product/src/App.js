import React from "react";
//Import FilterableProductTable Component from "Components Folder"
//Now You Can use FilterableProductTable Component within the <div>
import FilterableProductTable from "./Components/FilterableProductTable";
import SearchBar from "./Components/SearchBar";
import ProductTable from "./Components/ProductTable";
import ProductCategoryRow from "./Components/ProductCategoryRow";
import ProductRow from "./Components/ProductRow";
//Initialize Component
class App extends React.Component{
  render()
  {
    return(
    <div>
        <FilterableProductTable />
        <SearchBar />
        <ProductTable />
        <ProductCategoryRow />
        <ProductRow />
    </div>
    );
  }
}

export default App;
