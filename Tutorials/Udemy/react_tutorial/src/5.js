import React, { Component } from 'react';
import User from "./Components/Comment/User";

const user={
  name : "Asif",
  age: 26,
  text: " I am from Congo",
   avatarUrl: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/05/17180000/gettyimages-200019607-001-800x533.jpg' ,
    date : new Date()
}
const introduce ="Hi Bye";





class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">

        </header>
        <header>
           <User user= {user} />
        </header>
      </div>
    );
  }
}

export default App;
