import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    const location =useLocation()
    if(loding){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
}
PrivateRoute.propTypes = {
    children:PropTypes.string
  }
export default PrivateRoute;