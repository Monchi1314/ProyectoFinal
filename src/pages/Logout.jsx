import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
    const [exit, setExit] = useState(false);

    const close = () => {
        sessionStorage.clear();
        onLogout();
        setExit(true);
        // Reemplazar esta línea por el componente Navigate
        // window.location.href = "/pages/Home"; 
        // Usar el componente Navigate para redirigir al home.jsx
        return <Navigate to="/pages/Home" />;
    };

    if (exit) return <Navigate to="/" />;

    return (
        <>
            <section className="logout">
                <div className="container">
                    <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
                        <h4>¿Está seguro de cerrar sesión?</h4>
                        <button type="button" className="btn btn-warning" onClick={close}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Logout;
