// import { createContext, useReducer } from "react"
// const initialValue = {
//   data:[],
// }
// export const Context = createContext()
// const reducer = (state, action) => {
//   const {type, payload} = action 

//   switch (type) {
//     case 'GET_DATA':
      
//       return {...state, data: payload }
  
//     default:
//       return {state}
//   }

// }
// const Provider = ({children}) => {
// const [state,dispatch] = useReducer(reducer, initialValue)
//   return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
// }