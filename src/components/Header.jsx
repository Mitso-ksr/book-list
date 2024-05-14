import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "../store/usersSlice";

function Header({ pageTitle }) {
  const dispatch = useDispatch();


  function handleSignOut() {
    if (confirm("Are you sure you want to log out?")) {
      signOut(auth)
        .then(dispatch(setUser(null)))
        .catch((error) => console.log(error));
    }
  }

  return (
    <>
      <h1>{pageTitle}</h1>

      <div className="header-btns">
        <NavLink to="/">
          <button className="btn">Books</button>
        </NavLink>

        <NavLink to="/add-book">
          <button className="btn">Add Book +</button>
        </NavLink>

        <button className="btn transparent" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
