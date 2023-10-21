import {  useLoaderData } from "react-router-dom";
import Header from "./Header";
import swal from 'sweetalert'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Details = () => {
    const {user}  = useContext(AuthContext)
    const {email} = user
    const loader=useLoaderData()
    const {image,name,brand}=loader

    const handleclick = (name,image,brand)=>{
        const cardInfo = {name,image,brand,email}
        fetch('https://assignment-10-server-xi-three.vercel.app/deatils',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(cardInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                swal("Good job!", "succfully!", "success");
            }
        })
    }

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-8" >
        
            
            <div  className="card w-72 bg-base-100 shadow-xl ">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Brand Name: {brand}</h2>
              </div>
              <div onClick={()=>handleclick(name,image,brand)}>
              <button  className="btn btn-primary">Add Button</button>
              </div>
            </div>
          
                
            
    
        </div>
        </div>
    );
};

export default Details;