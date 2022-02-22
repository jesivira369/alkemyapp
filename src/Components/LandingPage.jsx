import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LandingPage = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/login`; 
      navigate(path);
    }
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-4">
            Welcome to Alkemy App
        </h3>
        <Link to="/login" className="px-6 py-2 mt-4 ml-20 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Log in</Link>
      </div>
    </div>
  );
};

export default LandingPage;
