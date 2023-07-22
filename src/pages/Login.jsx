import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'
const Login = ({onLogin}) => {

    const valores_iniciales = {
        user: "",
        password: "",
    }
     const [user, setUser]=useState(valores_iniciales)
     const [redirect, setRedirect]=useState(false)

     useEffect(() => {
        if (redirect) {
          onLogin();
        }
      }, [redirect, onLogin]);



    //Cuando cambian
    const onchange=(event)=>{
        setUser({ ...user, [event.target.name]:event.target.value})
    }

    const onsubmit = async(event)=>{
        event.preventDefault()

        try {
            const url = "http://localhost:8081/user/login"
            const data = user
            const config = { headers: { 'Content-Type': 'application/json' } };
            const response = await axios.post(url, data, config);
            if (response.status == 200) {
                setUser(response.data)
                Swal.fire({
                    title: "<strong>Excelente!!</strong>",
                    html: "<i>Te has logeuado</i>",
                    icon: 'success'
                })
                setRedirect(true)
                sessionStorage.setItem("token", response.data.token)
            }
            else
                Swal.fire({
                    title: <strong>Vaya...</strong>,
                    html: "<i>No se pudo registrar el usuario</i>",
                    icon: 'error'
                })

        } catch (error) {
            if (error.response.status == 400)
                Swal.fire({
                    title: "<strong>Vaya...</strong>",
                    html: "<i>Usuario o contraseña invalido</i>",
                    icon: 'error'
                })
        }
    }    
    if (redirect){
             return <Navigate to="/"></Navigate>
        }
            

    return (
        <>
            <section className="login-wrapper">
                <div className="container">
                    <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
                        <form onSubmit={onsubmit}>
                            <img className="img-responsive" alt="logo" src="img/logo.png" />
                            <input type="text" className="form-control input-lg" name="user" value={user.user} onChange={onchange} placeholder="Usuario" />
                            <input type="password" className="form-control input-lg" name="password" value={user.password} placeholder="Contraseña"  onChange={onchange} />
                            <button type="submit" className="btn btn-primary">Entrar</button>
                            <p>¿No tiene cuenta? <Link to="/register">Crear una cuenta</Link></p>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Login