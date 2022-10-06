import { Link } from "react-router-dom";



export const LoginForm = () => {


  return (
    <>
        <div className="container text-center col-3 mt-5" >
          <form>

              <h1 className=" mb-3 fw-normal">Login</h1>

              <div className="form-floating">
                <input type="email" className="form-control mb-2 shadow" id="floatingInput" placeholder="name@example.com" />
                <label >Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control shadow" id="floatingPassword" placeholder="Password" />
                <label >Password</label>
              </div>

              <div className="checkbox mb-3 mt-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
             <Link
                to={`/dashboard`}
                className="btn btn-lg btn-primary shadow"
             >
                Sing in
             </Link>
              <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form> 
        </div>
    </>
  )
}
