

export const LoginPage = () => {
  return (
    <>
        <div className="container text-center col-3 mt-5" >
          <form>

              <h1 className=" mb-3 fw-normal">Login</h1>

              <div className="form-floating">
                <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3 mt-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className=" btn btn-lg btn-primary" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form> 
        </div>
    </>
  )
}
