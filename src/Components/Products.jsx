import Header from "./Header";
import backgorundImg1 from '../assets/backgorund1.jpg'
import backgorundImg2 from '../assets/backgorund2.jpg'
import backgroundimg3 from '../assets/carimg1.png'
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
    const loder = useLoaderData()
    console.log('dddddddddddd',loder);
  return (
    <div>
      <Header></Header>
      
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img 
              src={backgorundImg1}
              className="w-full h-72"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={backgorundImg2}
              className="w-full h-72"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={backgroundimg3}
              className="w-full h-72"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
    
        </div>
      </div>

      <div className="grid grid-cols-1 grid-cols-2">
        {
            loder && loder.map(user=> <div key={user.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={user.photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {user.name}</h2>
              <h2 className="card-title">Brand Name: {user.brand}</h2>
              <h2 className="card-title">Price: {user.price}</h2>
              <h2 className="card-title">Rating: {user.rating}</h2>
              <div className="card-actions">
             
               <Link to={`/userSingle/${user._id}`}> <button className="btn btn-primary">Details</button></Link>
              </div>
              <div className="card-actions">
               <Link to={`/update/${user._id}`}>
               <button className="btn btn-primary">Update</button>
               </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );

};

export default Products;
