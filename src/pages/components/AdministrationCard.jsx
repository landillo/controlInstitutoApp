import { Link } from "react-router-dom";
import { AdminStudenModal } from "/src/students/components/AdminStudenModal";


export const AdministrationCard = () => {
  return (
    <>
       <div className="row row-cols-md-4 g-4 text-center mt-2 d-flex justify-content-evenly">
            <div className="card shadow" >
                <img src="/assets/niños-salon.png" className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Administrar Alumnos</h5>
                    <p className="card-text">Aquí accesas a la administracion de los alumnos, agregar, editar, eliminar y consultar alumnos.</p>
                    
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#admonStudent">
                        Administrar
                    </button>
                    
                    < AdminStudenModal />
                   
                </div>
            </div>

            <div className="card shadow ms-2" >
                <img src="/assets/back-to-school.png" className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Administrar Docentes</h5>
                    <p className="card-text">Aquí accesas a la administracion de los docentes, agregar, editar, eliminar y consultar docentes.</p>
                    <Link 
                        to={'adminstudentspage'}
                        className="btn btn-primary shadow"
                    >
                            Administrar
                    </Link >
                </div>
            </div>

            <div className="card shadow ms-2" >
                <img src="/assets/back-to-school.png" className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Administrar Usuarios</h5>
                    <p className="card-text">Aquí accesas a la administracion de los usuarios, agregar, editar, eliminar y consultar usuarios.</p>
                    <Link 
                        to={'adminstudentspage'}
                        className="btn btn-primary shadow"
                    >
                            Administrar
                    </Link >
                </div>
            </div>
        </div>    
    
    </>
  )
}
