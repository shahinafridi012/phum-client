import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children} : {children:ReactNode}) => {
    const token= useAppSelector((useCurrentToken))
    console.log("ProtectedRoutes rendered — token:", token);

    if(!token){
        return <Navigate to='/login' replace={true}/>
    }
    return children
};

export default ProtectedRoutes;