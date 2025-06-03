//abject in reducer
// 
// 
//  import { useReducer } from "react";
// import Button from 'react-bootstrap/Button';


// export default function App() {
  
  
//   const initialState = {
//     name : 'chips' ,
//     price : '20000 t',
//     count : 0
//   }
  
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "plus1":
//         return { ...state, count: state.count + 1 };
//       case "min1":
//         return { ...state, count: state.count - 1 };
//         case "zero":
//         return { ...state, count: state.count = 0 };
//       default:
//         return state;
//     }
//   };

  
//   const [state,dispatch]=useReducer(reducer,initialState)


//   return (
//     <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"100px"}}>
//       <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
//         <div style={{margin:"30px"}}>
//           <Button variant="outline-dark" style={{padding:"5px 10px",fontSize:"xx-large",margin:"20px"}}
//            onClick={()=>dispatch({type:'plus1'})}>+1</Button>
//           <Button variant="outline-dark" style={{padding:"5px 12px",fontSize:"xx-large",margin:"20px"}}
//            onClick={()=>dispatch({type:'min1'})}>-1</Button>
//           <Button variant="outline-dark" style={{padding:"5px 18px",fontSize:"xx-large",margin:"20px"}}
//            onClick={()=>dispatch({type:'zero'})}>0</Button>
//         </div>
//         <div style={{fontSize:"xx-large",margin:"20px"}}>
//           <span style={{margin:"30px"}}><span style={{color:"blue"}}>
//              name : </span> {state.name} </span> <span style={{margin:"30px"}}> <span style={{color:"blue"}}>
//              price : </span>{state.price} </span> <span style={{margin:"30px"}}> <span style={{color:"blue"}}>
//               count : </span>{state.count} </span>
//         </div>
//       </div>
//     </div>
    
//   );
// }