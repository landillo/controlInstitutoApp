

export const InformationCards = () => {
  return (
    <>
     <div className="row row-cols-md-3  g-3 mt-2 animate__animated animate__zoomIn d-flex justify-content-evenly"  >


        <div className="col-md-2">

            <img src="/assets/back-to-school.png" className="card-img mt-2 px-2 rounded-circle img-fluid"  alt="..." />
            <div className="card-body text-center mt-3">
                <h5 className="card-title">
                    Inscripciones Abiertas
                </h5>
                <p className="card-text mt-2">
                    En el Instituto Federico Froebel, tenemos inscripciones abiertas todo el tiempo, consulta los requisitos en el siguiente enlace
                </p>
            </div>
            <p className="text-center">
                <a href="#" className="btn btn-primary mt-3 text-center shadow ">
                    Leer más...
                </a>
            </p>
        </div>

        <div className="col-md-2">

            <img src="/assets/niños-salon.png" className="card-img mt-2 px-2 rounded-circle img-fluid"  alt="..." />
            <div className="card-body text-center mt-3">
                <h5 className="card-title">
                     Los mejores servicios educativos
                </h5>
                <p className="card-text mt-2">
                    En el Instituto Federico Froebel contamos con los mejores servicios educativos de la región
                </p>
            </div>
            <p className="text-center">
                <a href="#" className="btn btn-primary mt-3 text-center shadow ">
                    Leer más...
                </a>
            </p>
        </div>

        <div className="col-md-2">

            <img src="/assets/niños-pasto.png" className="card-img mt-2 px-2 rounded-circle img-fluid"  alt="..." />
            <div className="card-body text-center mt-3">
                <h5 className="card-title">
                    Beneficios adicionales
                </h5>
                <p className="card-text mt-2">
                    Por ser parte del Instituto Federico Froebel sus hijos y usted cuenta con beneficios especiales en la farmacia del institulo
                </p>
            </div>
            <p className="text-center ">
                <a href="#" className="btn btn-primary mt-3 text-center shadow ">
                    Leer más...
                </a>
            </p>
        </div>
        
     </div>

    </>
  )
}

{/* <div className="card" >
    <img src="/assets/back-to-school.png" className="card-img mt-2 px-2 rounded-circle" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Inscripciones Abiertas</h5>
        <p className="card-text">En el Instituto Federico Froebel, tenemos inscripciones abiertas todo el tiempo, consulta los requisitos en el siguiente enlace</p>
        <a href="#" className="btn btn-primary">Leer más...</a>
    </div>
</div> */}

{/* <div className="card" >
    <img src="/assets/niños-salon.png" className="card-img mt-2 px-2 rounded-circle" alt="..." />
    <div className="card-body text-center">
        <h5 className="card-title">Los mejores servicios educativos</h5>
        <p className="card-text">En el Instituto Federico Froebel contamos con los mejores servicios educativos de la región</p>
        <a href="#" className="btn btn-primary shadow">leer más...</a>
    </div>
</div>

<div className="card" >
    <img src="/assets/niños-pasto.png" className="card-img mt-2 px-2 " alt="..." />
    <div className="card-body">
        <h5 className="card-title">Beneficios adicionales</h5>
        <p className="card-text">Por ser parte del Instituto Federico Froebel sus hijos y usted cuenta con beneficios especiales </p>
        <a href="#" className="btn btn-primary shadow">Leer más...</a>
    </div>
</div> */}