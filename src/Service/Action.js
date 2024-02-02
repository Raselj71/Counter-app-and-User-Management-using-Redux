import { ADD_USER, DECREMENT, INCREMENT, REMOVE_USER, RESET } from "./Constant"

export const incrementCounter=()=>{
    return{
        type:INCREMENT,
    }
}
export const decrementCounter=()=>{
    return{
        type:DECREMENT,
    }
}
export const resetCounter=()=>{
    return{
        type:RESET,
    }
}
export const addUser=(item)=>{
      return{
          type:ADD_USER,
          payload:item
      }

}
export const removeUser=(id)=>{
    return{
        type:REMOVE_USER,
        payload:id,
    }
}