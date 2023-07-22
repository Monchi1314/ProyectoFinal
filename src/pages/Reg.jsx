import { useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'

const Reg = () => {
    //Valores iniciales
    const valores_iniciales = {
        user: "",
        password: "",
        name: ""
    }
    const [user, setUser] = useState(valores_iniciales)

    const [redirect, setRedirect] = useState(false)


    const onchange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user)
    }

    const onsubmit = async (event) => {
        event.preventDefault()

        try {
            const url = "http://localhost:8081/user/login"
            const data = user
            const config = { headers: { 'Content-Type': 'application/json' } };

            const response = await axios.post(url, data, config);
            if (response.status == 200) {
                Swal.fire({
                    title: "<strong>Excelente</strong>",
                    html: "<i>Usuario Registrado Satisfactoramente!</i>",
                    icon: 'success'
                })
                setUser(valores_iniciales)
                setRedirect(true)
            }
            else
                Swal.fire({
                    title: <strong>Vaya...</strong>,
                    html: "<i>No se pudo registrar el usuario</i>",
                    icon: 'error'
                })

        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }




    if (redirect)
        return <Navigate to="/"></Navigate>
    return (
        <>
            <section className="login-wrapper">
                <div className="container">
                    <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
                        <form onSubmit={onsubmit}>
                            <img className="img-responsive" alt="logo" src="img/logo.png" />
                            <input type="text" className="form-control input-lg" name="user" value={user.user} onChange={onchange} placeholder="Usuario" />
                            <input type="password" className="form-control input-lg" name="password" value={user.password} placeholder="Contraseña" onChange={onchange} />
                            <input type="text" className="form-control input-lg" name="name" value={user.name} placeholder="Nombre" onChange={onchange} />
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}

export default Reg