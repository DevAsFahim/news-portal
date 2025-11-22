import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.webp"

const Login = () => {
  return (
    <div className="min-h-screen p-6 lg:p-14">
      <Link to="/" className="mb-5 block">
        <img className="max-w-[180px]" src={logo} alt="logo" />
      </Link>
      <div className="max-w-[400px] mx-auto bg-white p-6 md:p-10 shadow-md">
        <p className="text-muted mb-2">Please enter your details</p>
        <h3 className="font-bold text-4xl mb-5">Welcome back</h3>

        <form>
          <div className="mb-5">
            <input
            className="input mb-4"
            placeholder="Email address"
            type="email"
          />
          <input
            className="input mb-4"
            placeholder="Password"
            type="password"
          />
          <Link to="/" className="underline text-blue text-sm text-right block">Forgot password</Link>
          </div>

          <div>
            <button className="primary-btn w-full">Login</button>
            <button type="button" className="flex items-center justify-center border border-border w-full mt-4 py-2 gap-3 cursor-pointer hover:shadow-md hover:bg-amber-50 active:bg-amber-100">
              <img className="h-8" src={google} alt="google logo" />
              Sign in with Google
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted">Don't have an account? <Link className="underline text-blue text-sm text-right" to="/register"> Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
