import React,{useEffect,useState} from 'react';

const Listener = (props) => {

  const handleKeyDown = (event) => {
    console.log('A key was pressed', event.keyCode);
  };

  useEffect(()=>{
    window.addEventListener('keydown',handleKeyDown )    // add listener
    console.log(' Mounted');
    return ()=>{
      console.log('Un-Mounted');
      window.removeEventListener('keydown', handleKeyDown); //  remove listener
    }
  },[])

  return (
    <div className='container'>
      <h1>Welcome to the Keydown Listening Component</h1>
    </div>
  );
};
// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }
const DataSource=()=>{
   const [globalState,setGlobalState] = useState(0)
   
   const handleGlobalState=(value)=>{
    const prevCount =globalState 
     setGlobalState(prevCount+value)
   }

  return <> 
           <div>Data Source {globalState }</div>
           <button onClick={()=>{handleGlobalState(1) }}>Add+</button>
           <button onClick={()=>{handleGlobalState(-1) }}>Substract-</button>
           <Listener/>
        </>
}

const App=()=>{
  const [toggle,setToggle]= useState(false)

 
  return <> 
         
          <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
           {toggle &&   <Listener/>}
         
    
    
        </> 
}

export default App
