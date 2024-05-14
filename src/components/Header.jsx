import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from '../firebase/config'
import { useDispatch } from "react-redux";
import { setUser } from "../store/usersSlice";

function Header({pageTitle}) {

  const dispatch = useDispatch();

  function handleSignOut() {
    signOut(auth).then(
      dispatch(setUser(null))
    )
  }

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">

                    <NavLink to="/">
                      <button className="btn">
                          Books
                      </button>
                    </NavLink>

                    <NavLink to="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </NavLink>

                    <button 
                      onClick = {handleSignOut}
                      className="btn transparent">
                      Logout
                    </button>

               
            </div>
    
      </>
    )
  }
  
  export default Header
  
import {Link} from 'react-router-dom'

function Header({pageTitle}) {

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">
                  <Link to="/" style={{"all": "unset"}}>
                    <button className="btn">
                        Books
                    </button>
                  </Link>


                  <Link to="/add-book" style={{"all": "unset"}}>
                    <button className="btn">
                        Add Book +
                    </button>
                  </Link>
               
            </div>
    
      </>
    )
  }
  
  export default Header
  