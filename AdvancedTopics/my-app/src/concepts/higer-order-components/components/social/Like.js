import React,{useEffect,useState} from 'react';

import EnhancedComponent from '../HigherOrderComponents/Counter'

const Like =()=>{
    return (
        <>
         <div>Like Component </div>
       </>
    )
 }
 
export default EnhancedComponent(Like,5)
