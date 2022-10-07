import { Link, Navigate, useNavigate } from "react-router-dom";


export const AdminStudenModal = () => {
  
    const navigate = useNavigate();

    const onNavigateConstultar = () => {

        navigate('/dashboard/consultstudentpage');
    }
  
  
    return (
    <>

        {/* <!-- Modal --> */}
        <div className="modal fade" 
            id="admonStudent" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true"
        >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Seleccione una opción</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body justify-content-evenly ">
                    <button 
                        type="button" 
                        className="btn btn-primary shadow ms-2"
                        onClick={ onNavigateConstultar }
                        data-bs-dismiss="modal"
                        >
                            Consultar Alumno
                    </button>
                    <button type="button" className="btn btn-primary shadow ms-2">Agregar Alumno</button>
                    <button type="button" className="btn btn-primary shadow ms-2">Editar Alumno</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary shadow" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>
    
    </>
  )
}
