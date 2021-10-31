import React from 'react';
import FilterData from './HigherOrderComponents/FilterData'
const TodoList=({data})=>{

    return (
        <>
            <div>Todo List</div>
            {
               data.map((ele,index)=>{
                   return (
                       <React.Fragment key={ele.id}>
                        <div> Title: {ele.title} </div>
                        <div> Completed: {ele.completed}</div>
                       </ React.Fragment>
                      
                   )
               })
            }
        </>
    )
}

export default FilterData(TodoList,"todos")