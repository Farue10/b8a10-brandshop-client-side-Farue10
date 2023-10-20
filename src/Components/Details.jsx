import {  useLoaderData } from "react-router-dom";
import Header from "./Header";
import swal from 'sweetalert'


const Details = () => {
    const loader=useLoaderData()
    const {image,name,brand}=loader

    const handleclick = (name,image,brand)=>{
        const cardInfo = {name,image,brand}
        fetch('http://localhost:5000/deatils',{
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