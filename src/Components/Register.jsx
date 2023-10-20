import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import swal from 'sweetalert'
import { GoogleAuthProvider } from "firebase/auth";
import Header from "./Header";
import { AuthContext } from "../Provider/AuthProvider";

const provider = new GoogleAuthProvider();

const Register = () => {
    const {createUser,gogglePopup}= useContext(AuthContext)
    const [errorPassword,seterroPassword]=useState('')
    const [succes,setSucces]=useState('')

    const handleclick = ()=>{
      gogglePopup(provider)
      .then(result=>{
        console.log(result.userect)
        return swal("Good job!", "You clicked the button!", "success")
      })
      .catch(err=>{
        console.error(err.message);
      })
    }

    const handleRegister = e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        
        seterroPassword('')
        setSucces('')

       if(password.length<6){
        seterroPassword('please password at least 6 charaecter');
        return;
       }

       else if(!/[A-Z]/.test(password)){
        seterroPassword('please at least one UperCase');
        return
       }

       else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
        seterroPassword('please at least one Special charater');
        return
       }

       createUser(email,password)
       .then(result=>{

      console.log(result.user);
      const user = {email}
      fetch('http://localhost:5000/person',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
        setSucces('succesfull done')
        return swal("Good job!", "You clicked the button!", "success")
       })
       .catch(error=>{
        seterroPassword(error.message);
        swal("Error!", "this is already use!", "error")
       })
    }
  return (
    <div>
     <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
        
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                {
                    errorPassword?<p className="text-red-400">{errorPassword}</p>
                    :
                    <p className="text-green-600">{succes}</p>
                    
                }
              </div>
            </form>
            <h2>I Have a account<Link className="text-red-700" to='/login'> login</Link> </h2>
          </div>
          <button onClick={handleclick} className="btn btn-primary"> Googgle</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
