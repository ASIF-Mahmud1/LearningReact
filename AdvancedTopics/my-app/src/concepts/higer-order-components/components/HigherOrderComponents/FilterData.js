import Comments from '../../../../data/comments'
import Todos from '../../../../data/todos'


const globalData={
    comments: Comments,
    todos: Todos
}

const HOC = (WrappedComponent,selectData) => {
    
    const firstTwoData= globalData[selectData].slice(0,2)
    return (
       function(){
          return <WrappedComponent data={firstTwoData}  />
       }
    )
}

export default HOC