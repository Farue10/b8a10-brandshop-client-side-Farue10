import {  Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import backgroundimg1 from "../assets/carimg1.png";
import backgroundimg2 from "../assets/carimg2.png";
import backgroundimg3 from "../assets/desinging-ai-car.jpg";
import backgroundimg4 from "../assets/backgorund1.jpg";
import backgroundimg5 from "../assets/backgorund2.jpg";

const Home = () => {
  const users = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-8" >
          {users?.map((user) => (
            <Link key={user.id} to={`/products/${user.name}`}>
            <div  className="card w-72 bg-base-100 shadow-xl ">
              <figure className="px-10 pt-10">
                <img src={user.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
              </div>
            </div>
            </Link>
          ))}
        </div>
      
      </div>

      <div>
        <h2 className="text-4xl m-4">About Section</h2>
        <div className="flex justify-between">
          <div>
            <img src={backgroundimg1}></img>
          </div>

          <div>
            <img className="w-96 h-56" src={backgroundimg2}></img>
          </div>

          <div>
            <img className="w-96 h-56" src={backgroundimg3}></img>
          </div>
        </div>
        <p>
          A car, or an automobile, is a motor vehicle with wheels. Most
          definitions of cars say that they run primarily on roads, seat one to
          eight people, have four wheels, and mainly transport people, not
          cargo.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-4xl m-8">Feature Section List</h2>
        <div className="flex px-20">
          <div>
            <img className="w-96 h-56 mr-40" src={backgroundimg4}></img>
          </div>
          <div>
            <img className="w-96 h-56" src={backgroundimg5}></img>
          </div>
        </div>
        <p className="text-xl">
        1.Advanced Driver Assistance Systems (ADAS):
        <small>
          These include features like adaptive cruise control, lane-keeping
          assistance, automatic emergency braking, and blind-spot monitoring to
          assist the driver and improve overall safety.
        </small>
      </p>
      <p  className="text-xl">2.Infotainment Systems: <small>These systems provide information and entertainment to the driver and passengers. They often include features such as touchscreen displays, Bluetooth connectivity, navigation systems, and smartphone integration.</small></p>

      <p  className="text-xl">3.Connectivity Features: <small> Many cars come equipped with features that enable connectivity, such as Wi-Fi hotspots, wireless charging, and integration with mobile apps for remote monitoring and control.</small></p>
      <p  className="text-xl">
      4.Advanced Safety Features: <small>These include systems like anti-lock braking, traction control, electronic stability control, and various airbag systems, all designed to enhance the safety of the vehicle.</small>
      </p>

      <p  className="text-xl">
      5.Performance Enhancements: <small>Some cars have features aimed at improving performance, such as turbocharged engines, all-wheel drive systems, and adjustable suspension settings.</small>
      </p>

      <p  className="text-xl">
      6.Self-Driving and Autonomous Features: <small>TWhile not yet fully realized, some cars come with features that enable partial autonomous driving, such as self-parking, advanced cruise control, and automated steering on highways.</small>
      </p>
      </div>
      <Footer></Footer>
      
     
    </div>
  );
};

export default Home;
