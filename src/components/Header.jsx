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
  