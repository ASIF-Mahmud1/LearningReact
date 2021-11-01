import React,{useEffect,useState} from 'react';

const HOC = (WrappedComponent) => {


   return function(props){

         return <WrappedComponent data={[]}  />
      }
   
}

export default HOC

// export default HOC_Counter