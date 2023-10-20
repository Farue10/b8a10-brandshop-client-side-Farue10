
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import swal from 'sweetalert'
import Header from "./Header";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('')
    const [succes,setSucces]=useState('')


    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    } 


    const handleSubmit = (e)=>{
          e.preventDefault()
          setError('')
          setSucces('')
         
    

        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state ? location.state: '/')
            setSucces('succesfully done')
            return swal("Good job!", "You clicked the button!", "success")
        })
        .catch(error=>{
              setError(error.message);
        })

    }
    return (
       
        <div>
             <Header></Header>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  value={email}
                  onChange={handleEmailChange}
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
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {
                error&&<p className="text-red-500">{error}</p>
              }
             
              {
                succes && <p className="text-green-500 text-xl">{succes}</p>
              }
            </form>
            <h2>please create a account<Link className="text-red-700" to='/register'> Register</Link> </h2>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;