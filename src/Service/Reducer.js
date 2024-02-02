import { ADD_USER, DECREMENT, INCREMENT, REMOVE_USER, RESET } from "./Constant"

 const userlist=[
        {id:1, name:'Rasel'},
        {id:2, name:'Raihan'},
        {id:3, name:'Ratul'},
        {id:4, name:'Rony Hasan'},
        {id:5, name:'Tasnim Hujur'},
 ]
export const initialState={
    count:12,
    user:userlist,
 }

const Reducer=(state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        
        case RESET:
            return{
                ...state,
                count:0
            }
        case ADD_USER:
            return{
                ...state,
                user:[...state.user, action.payload]
            }
        case REMOVE_USER:
            return{
                ...state,
                user:state.user.filter((item)=> item.id!=action.payload)
            }
        default:
          
        return  state
            
        
    }
   


}
export default Reducer