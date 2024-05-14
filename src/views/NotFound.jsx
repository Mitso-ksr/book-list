import Header from "../components/Header"

function NotFound() {
  return (
    <>
        <Header title = {"Book not found"} />
        <div style={{"text-align" : 'center'}}>
            <h1>
                The page was not found!
                return to books by pressing books
            </h1>

        </div>
    </>
  )
}

export default NotFound