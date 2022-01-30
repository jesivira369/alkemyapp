import ValidateLoginForm from './ValidateLoginForm'

const Login = () => {

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-center">Log in to your account 🔐</h3>
            <ValidateLoginForm />
        </div>
    </div>
    );
};

export default Login;


