import { Link } from "react-router-dom"


export const AdminStudentsPage = () => {
  return (
    <>
        <h1>AdminStudentsPage</h1>
        <hr />


        <Link
        to={'/dashboard'}
        className='btn btn-outline-primary'
        >back</Link>

    </>
  )
}
