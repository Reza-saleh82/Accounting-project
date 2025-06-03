// click and del   

// import { createContext, useContext, useState } from "react"

// export const ProductContext = createContext();

// const ProductProvider = ({children}) =>{
//   const [products, setProducts] = useState([]);

//   const addProduct = (name) => {
//     const newProduct = {
//       id: products.length + 1,
//       name,
//       date: new Date().toLocaleDateString("fa-IR"),
//     };
//     setProducts([...products, newProduct]);
//   };
//     return(
//         <ProductContext.Provider value ={{products, addProduct ,setProducts}}>
//             {children}
//         </ProductContext.Provider>
//     )
// }

// export default ProductProvider

// export const useProductContext =()=>useContext(ProductContext)


// import React, { useState } from "react";
// import { useProductContext } from "../context/NameContext";
// import { BiPlus } from "react-icons/bi";

// function AddName () {
//     const [name, setName] = useState("");
//     const { addProduct } = useProductContext();

//   const handleSubmit = () => {
//     if (name.trim()) {
//       addProduct(name);
//       setName("");
//     }
//   };
//     return (
//     <div style={{ marginTop:'100px' }} className="box2">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="name ? "
//         style={{ padding: "5px", marginRight: "10px" ,borderRadius:'10px',width:'300px'}}
//       />
//       <button onClick={handleSubmit} style={{ padding: "5px 10px" ,borderRadius:'50%',color:'white',backgroundColor:'gray'}}>
//         <BiPlus />
//       </button>
//     </div>
//     )
// }

// export default AddName


// import React from "react";
// import {useProductContext} from "../context/NameContext";
// import { BiX } from "react-icons/bi";
// import { AiFillSetting } from "react-icons/ai";
// import Button from 'react-bootstrap/Button';


// function ShowName () {
//     const {products , setProducts } = useProductContext()

//     const handleEdit = (id) => {
//       const updatedProducts = products.map((item) =>
//         item.id === id ? { ...item, name: `mahsol ${id}` } : item
//       );
//       setProducts(updatedProducts);
//     };

//     return (
//     <div style={{ margin: "20px" }} className="box">
//       <div>
//         {products.length === 0 ? (
//          <p>محصولی وجود ندارد</p>
//         ) : (
//         <div>
//          <ul>
//           {products.map(item => 
//             <li style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
//               <span style={{margin:'10px'}}> <span style={{color:'blue',fontSize:'large',margin:'3px'}}> ID: </span>{item.id} </span>
//                 <span style={{margin:'10px'}}> <span style={{color:'blue',fontSize:'large',margin:'3px'}}> name : </span>{item.name} </span>
//                  <span style={{margin:'10px'}}> <span style={{color:'blue',fontSize:'large',margin:'3px'}}> date :</span> {item.date}</span>
//               <Button variant="outline-danger" style={{padding:'1px 4px',marginLeft:'5px'}}
//                onClick={()=>setProducts(products.filter((select) => item.name!=select.name))}><BiX /></Button>
//                <Button variant="outline-info" style={{padding:'1px 4px',marginLeft:'5px'}}
//                onClick={() => handleEdit(item.id)}><AiFillSetting /></Button>
//             </li>
//           )}
//          </ul>
//         </div>
//         )}
//       </div>
//     </div>
//     )
// }

// export default ShowName


// import React, { createContext , useState } from 'react';
// import AddName from './components/AddName';
// import ShowName from './components/ShowName';
// import NameProvidor from './context/NameContext';
// import './css/home.css'

// export default function App() {
//   return (
//     <div>
//       <NameProvidor>
//         <AddName/>
//         <ShowName/>
//       </NameProvidor>
//     </div>
//   );
// }