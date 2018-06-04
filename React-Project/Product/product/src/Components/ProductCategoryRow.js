import React from "react";
//Initialize Component
class ProductCategoryRow extends React.Component{
  render(){

    return(
      <div>Product Category Row
       {this.props.type &&
       <div><h1>I have something to show {this.props.type} {this.props.name} {this.props.price}</h1></div>
       }
       <div><h1>Nothing to Show </h1></div>
      </div>
    );
  }
}
export default ProductCategoryRow;
