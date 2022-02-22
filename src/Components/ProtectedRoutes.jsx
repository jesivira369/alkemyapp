import { Navigate } from "react-router";
import { useContext } from 'react';
import ContextUser from './ContextUser';

const ProtectedRoutes = ({ children, redirectTo }) => {
    const {user} = useContext(ContextUser);

  return user ? children : <Navigate to={redirectTo} />;
}

export default ProtectedRoutes;