import React, { Component } from 'react';
import MovieRow from "./MovieRow";
import './App.css';
import $ from 'jquery'
class App extends Component {
  constructor(props){
    super(props)
    this.state= {}
/* console.log("This is My initializer")
    const  movies= [
             {id: 0, poster_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ9Pz0gPjHSquZUQv_MpcQrJV-5ttd2b7xFTo7BwNZsJcYBSK",  title: "Aandaz Apana Apna", overview:"Great Movie"},
             {id:1, poster_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GxKaPOoKSl4Qki0fNKjr_YTMXAfemOSFjaAwZMMflbr341FxLg", title: "Batman Begins", overview: "I Liked the portrayal of how Batman evolved "},
             {id:2,  poster_src: "https://i.ebayimg.com/images/g/IuYAAOSwpkFY701s/s-l300.jpg", title:"Kal Ho na Ho", overview:"Shahrukh Khan is the sole reason you need to like a Movie "}

           ]
  // "this.state" is rendundant here
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
    // Maybe I can use it in Product Project
    movies.forEach((show)=>{
    console.log(show.title)
    const movie_Row= <MovieRow show= {show}/>
    // Making a table to show movie poster and movie details

    movie_rows.push(movie_Row)
    }

    )
    this.state= {row: movie_rows}
     */
     this.performSearch()
  }
  // Very Inportant : Analyse how jquery is used to make ajax call
  performSearch(){
    console.log("perform Search using Movie DB");
    const urlString= "https://api.themoviedb.org/3/search/movie?api_key=b1b750c3cd19d76b8e1dff3323603e5f&language=en-US&query=marvel&page=1&include_adult=false"
    $.ajax({
         url : urlString,
         success: (searchResults) =>{
           console.log("Fetched data successfully")
           console.log(searchResults)
        //    console.log(searchResults.results)
          const movie_rows=[]
            const result= searchResults.results
            result.forEach((show)=>{
              show.poster_src=
              console.log(show.title)
            //    console.log(show.overview)
              const movie_Row= <MovieRow key={show.id} show={show} />
              movie_rows.push(movie_Row)
            }
          )
          this.setState({row: movie_rows})
         },
         error: (xhr, status,err)=>{

         }
    })
  }
  render() {
    return (
      <div className="">
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
