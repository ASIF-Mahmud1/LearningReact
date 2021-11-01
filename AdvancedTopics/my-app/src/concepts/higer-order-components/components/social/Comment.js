import React,{useEffect,useState} from 'react';

import EnhancedComponent from '../HigherOrderComponents/Counter'
const Comment =(props)=>{
   return (
       <>
          <div>
             Total Comments : {props.kk} <br />
            <button onClick={props.handleCLick}>Add Comment!</button>
          </div>
      </>
   )
}

export default  EnhancedComponent(Comment)