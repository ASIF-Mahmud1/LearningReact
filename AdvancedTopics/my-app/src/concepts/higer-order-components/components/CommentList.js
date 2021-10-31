import React from 'react';
import FilterData from './HigherOrderComponents/FilterData'

const Comment=({data})=>{
    return (
        <>
            <div>Comment</div>
            {
               data.map((ele,index)=>{
                   return (
                       <React.Fragment key={ele.id}>
                        <div >Name: {ele.name} </div>
                        <div>Body: {ele.body}</div>
                       </ React.Fragment>
                      
                   )
               })
            }
        </>
    )
}

export default FilterData(Comment, 'comments')