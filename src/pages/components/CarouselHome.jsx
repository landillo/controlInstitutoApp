

export const CarouselHome = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src='/assets/niñoescriniendo-instituto.png' className="d-block" width="100%" height="450" alt="desayuno" />
                            <div className="carousel-caption d-none d-md-block text-start">
                                <h1>Educación</h1>
                                <h3>Con la mejor atención a todos nuestros estudiantes creamos mejores estandares</h3>
                            </div>
                        </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src='/assets/niñolibro-instituto.png' className="d-block w-100" width="100%" height="450" alt="desayuno" />
                            <div className="carousel-caption d-none d-md-block text-end">
                                <h1>Prescolar</h1>
                                <h3>La temprana estimulacion crea mejores estudiantes</h3>
                            </div>
                        </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src='/assets/escritoriolentes-instituto.png' className="d-block w-100" width="100%" height="450" alt="desayuno" />
                        <div className="carousel-caption d-none d-md-block text-end">
                            <h1>Calidad</h1>
                            <h3>Los mejores colaboradores estan siempre al cuidado de tus hijos</h3>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </>
      )
}
