import React from "react";

class MovieRow extends React.Component{
  render(){
    return (
      <div>
      <table key={this.props.show.id}>
                       <tbody>
                        <tr>
                         <td>
                           <img  src={this.props.show.poster_src} width="100" alt="movie-poster" />
                         </td>

                         <td>
                           {this.props.show.title}
                           <p>{this.props.show.overview}</p>
                         </td>

                        </tr>

                       </tbody>
      </table>
      </div>
    );
  }
}
export default MovieRow;
