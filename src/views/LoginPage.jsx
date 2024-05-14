import FullPageLoader from "../components/FullPageLoader.jsx";
import { useState } from "react";
import { auth } from "../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "../store/usersSlice.js";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({
        id: user.uid,
        email: user.email
      }))
    } else {
      // User is signed out
      // ...
    }
  });

  function handleUserCredentials(e) {
    setUserCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(userCredentials);
  }

  function handleSignup(e) {
    setError("");
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch(setUser({
          id: user.uid,
          email: user.email
        }))
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(setUser({
          id: user.uid,
          email: user.email
        }))
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function handlePasswordReset() {
    sendPasswordResetEmail;
  }

  return (
    <>
      {isLoading && <FullPageLoader></FullPageLoader>}

      <div className="container login-page">
        <section>
          <h1>Welcome to the Book App</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
            <button
              className={`btn ${loginType == "login" ? "selected" : ""}`}
              onClick={() => setLoginType("login")}
            >
              Login
            </button>
            <button
              className={`btn ${loginType == "signup" ? "selected" : ""}`}
              onClick={() => setLoginType("signup")}
            >
              Signup
            </button>
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Email *</label>
              <input
                onChange={(e) => handleUserCredentials(e)}
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <label>Password *</label>
              <input
                onChange={(e) => handleUserCredentials(e)}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            {loginType == "login" ? (
              <button
                onClick={(e) => handleLogin(e)}
                className="active btn btn-block"
              >
                Login
              </button>
            ) : (
              <button
                onClick={(e) => handleSignup(e)}
                className="active btn btn-block"
              >
                Sign Up
              </button>
            )}
            {error && <div className="error">{error}</div>}

            <Link to={"/reset-password"} style={{ all: "unset" }}>
              <p  className="forgot-password">
                Forgot Password?
              </p>
            </Link>
          </form>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
