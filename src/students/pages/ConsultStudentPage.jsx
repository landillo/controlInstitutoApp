import { Link } from "react-router-dom"



export const ConsultStudentPage = () => {
  return (
    <>
        <h1>Consulta de Alumnos</h1>

        <hr />


        <div className="row conatiner col-md-5 g-3 d-flex justify-content-center ms-4">
            <label className="form-label">Buscar</label>
            <input type="text" className="form-control" id="inputEmail" />
         </div>
       
        
        <div className="container row row-cols-md-2  g-3 mt-2 justify-content-evenly">
    
                <div className="flex-shrink-0">
                    <img src="/assets/niñoescriniendo-instituto.png" className="card-img mt-2 px-2 img-fluid" alt="" />
                </div>
            
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="inputEmail5" />
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label  className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option >Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" >
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12">
                   
                </div>
            </form>


        </div>

        <div className="mt-2 col-6  d-flex d-flex justify-content-between container">

            <Link
                to={'/dashboard'}
                className='btn btn-outline-primary  shadow'
            >
                back
            </Link>
            <button type="submit" className="btn btn-primary shadow ">Historial de Pagos</button>
            <button type="submit" className="btn btn-primary shadow ">Imprimir</button>
            <button type="submit" className="btn btn-primary shadow ">Editar</button>
        </div>
    
    </>
  )
}
