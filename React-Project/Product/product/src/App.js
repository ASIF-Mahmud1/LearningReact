import React from "react";
//Import FilterableProductTable Component from "Components Folder"
//Now You Can use FilterableProductTable Component within the <div>
import FilterableProductTable from "./Components/FilterableProductTable";
import SearchBar from "./Components/SearchBar";
import ProductTable from "./Components/ProductTable";
import ProductCategoryRow from "./Components/ProductCategoryRow";
import ProductRow from "./Components/ProductRow";
//Initialize Component
var AvailableItems= [
  {type:"electronics", name:"computer", price:5000,},
   {type:"electronics", name:"printer", price:1000,},
    {type:"jwels", name:"diamond-ring", price:90000,},
      {type:"clothes", name:"Sweat Pants", price:200,},
        {type:"food", name:"Cereals", price:10,}
                 ];
  var length= AvailableItems.length;

class App extends React.Component{

  state={
    type : undefined,
    name: undefined,
    price: undefined
  }
// Fetch Data From Text Field.....
  getItem= async(e)=>{
  e.preventDefault();
  const items= e.target.elements.Items.value;

 for(var i=0; i<length; i++)
 {
   if(items=== AvailableItems[i].type)
   {
     this.setState({

       type : AvailableItems[i].type,
       name: AvailableItems[i].name,
       price:AvailableItems[i].price

     });
     console.log(AvailableItems[i]);

   }
   else if(items=== AvailableItems[i].name)
   {
     this.setState({

       type : AvailableItems[i].type,
       name: AvailableItems[i].name,
       price:AvailableItems[i].price

     });
     console.log(AvailableItems[i]);
   }
   else
   {
     this.setState({

       type : undefined,
       name:  undefined,
       price: undefined

     });

   }
 }
 }


  render()
  {
    return(
    <div>
        <FilterableProductTable

        />
        <SearchBar getItem= {this.getItem} />
        <ProductTable />
        <ProductCategoryRow type/>
        <ProductRow />
    </div>
    );
  }
}

export default App;
