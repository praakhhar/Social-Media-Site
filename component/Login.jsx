import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PostList } from "../store/post-list-store";

const Login = () => {
  const { login, setLogin } = useContext(PostList);
  const navigate = useNavigate(); // useNavigate inside the component
  const email = useRef();
  const pass = useRef();

  const handleIt = (event) => {
    event.preventDefault(); // Prevent form submission refresh
    const Email = email.current.value;
    const Pass = pass.current.value;

    if (Email === "" || Pass === "") {
      alert("Invalid email or password");
      return;
    }
    setLogin(true);
    alert(`Welcome ${Email}`);
    navigate("/"); // Navigate to home
  };

  return (
    <div className="flex-box">
      <main className="form-signin my-login">
        <form onSubmit={handleIt}>
          {" "}
          {/* Use onSubmit for form */}
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <div className="form-floating">
            <input
              ref={email}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>{" "}
            {/* htmlFor instead of for */}
          </div>
          <div className="form-floating">
            <input
              ref={pass}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
