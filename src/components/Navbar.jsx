import { Link } from 'react-router-dom'
const Navbar = () => {

    // Esta función cierra el menú del navbar
    const closeNavbar = () => {
        let navbarMenu = document.getElementById("navbar-menu");
        navbarMenu.classList.remove("in");
    }

    return (
        <nav className="navbar navbar-default navbar-sticky bootsnav">

            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>

                </div>

                <div className="collapse navbar-collapse" id="navbar-menu">
                    <Link className="navbar-brand" to="/"><img src="img/logo.png" className="logo" alt="" /></Link>
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><Link to="/" onClick={closeNavbar}>Inicio</Link></li>   {!sessionStorage.getItem("token") ? (<>
                            <li><Link to="/login" onClick={closeNavbar}>Iniciar Sesión</Link></li>
                            <li><Link to="/register" onClick={closeNavbar}>Registro</Link></li>
                        </>) : (<>
                            <li><Link to="/regchat" onClick={closeNavbar}>Realizar Consulta</Link></li>
                            <li><Link to="/listchat" onClick={closeNavbar}>Listado de Consultas</Link></li>
                            <li><Link to="/logout" onClick={closeNavbar}>Cerrar Sesion</Link></li>
                        </>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
