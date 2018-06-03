import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("This is My initializer")
    const  movies= [
             {id: 0, title: "Aandaz Apana Apna", overview:"Great Movie"},
             {id:1, title: "Batman Begins", overview: "I Liked the portrayal of how Batman evolved "},
             {id:2, title:"Kal Ho na Ho", overview:"Shahrukh Khan is the sole reason you need to like a Movie "}

           ]
    this.state= {

      row : [
                <p key="1">This is my row</p>,
                <p key="2">This is my row</p>,
                <p key="3">This is my row</p>,
                <p key="4">This is my row</p>
            ],
      numbers: [1,2,3,4,5,6,7,8,9,10]

    }
    // So that I can show Movie names to the browser
    const movie_rows=[]
    //Looping through Array
    movies.forEach((show)=>{
    console.log(show.title)
    movie_rows.push(<p key={show.id}>movie title : {show.title}</p>)
    }

    )
    this.state= {row: movie_rows}
  }
  render() {
    return (
      <div className="App">
        <table style={{
          backgroundColor: '#000',
          display: 'block',
          color : '#fff',
          paddingLeft: 16

        }}>
         <tbody>
          <tr>
           <td>
            <img alt="APP Icon"width="50"src="image.jpg"/>
           </td>
           <td width="8"></td>
           <td>
          <h1>  Movies DB Search</h1>
           </td>

          </tr>

         </tbody>

        </table>
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,

        }} placeholder= "Enter Search Item"/>
        {this.state.row}
      </div>

    );
  }
}

export default App;
