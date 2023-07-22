import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import gifs from "../assets/loading.gif";


const RegChat = () => {
    if (!sessionStorage.getItem("token")) return <Navigate to="/noaccess" />;

    // Valores iniciales
    const valores_iniciales = {
        message: "",
        name: "",
        valor: "",
        tipodevehiculo: "Tipo de Automovil",
    };

    const [chatgpt, setChatGPT] = useState(valores_iniciales);
    const [respuesta, setRespuesta] = useState("");
    const [showGif, setShowGif] = useState(false);

    // Cuando cambian
    const onchange = (event) => {
        setChatGPT({ ...chatgpt, [event.target.name]: event.target.value });
    };

    const onTipoVehiculoChange = (event) => {
        setChatGPT({ ...chatgpt, tipoVehiculo: event.target.value });
    };

    const onsubmit = async (event) => {
        event.preventDefault();
        setShowGif(true);
        try {
            const url = "http://localhost:8081/chatgpt";
            const data = chatgpt;

            // Modificamos el prompt para incluir las tres preguntas
            const prompt = `
            Hola, te ayudaré a encontrar la mejor opción de préstamo para tu nuevo vehículo, en Panamá con los datos que tengo.
            Por favor, responde a las siguientes preguntas:
            1. ¿Prefieres un préstamo a corto, mediano o largo plazo?
            Tú respuesta: $ ${chatgpt.message} 
            2. ¿Cuál es el valor estimado del vehículo que deseas comprar?
            Tú respuesta: ${chatgpt.valor}
            3. ¿Qué tipo de vehículo estás considerando? (${chatgpt.tipoVehiculo})
            Tú respuesta: ${chatgpt.tipodevehiculo}
            `;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + sessionStorage.getItem("token"),
                },
            };

            const response = await axios.post(url, { message: prompt }, config);
            if (response.status === 200) {
                setRespuesta(response.data.response);
                setShowGif(false);
            } else {
                Swal.fire({
                    title: <strong>Vaya...</strong>,
                    html: "<i>No se pudo registrar el usuario</i>",
                    icon: "error",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="Preguntas-Chat">
                <div className="container">
                    <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
                        <form onSubmit={onsubmit}>
                            <img className="img-responsive" alt="logo" src="img/logo.png" />
                            <label>¿Valor estimado del vehiculo?</label>
                            <input type="text" className="form-control input-lg input-with-prefix" name="valor" placeholder="Valor estimado del vehiculo" onChange={onchange} value={chatgpt.valor} />
                            <div className="OpcionesCombo">
                                <label>¿Prefieres un préstamo a corto, mediano o largo plazo?</label>
                                <select
                                    className="ComboBox" name="message" onChange={onchange} value={chatgpt.message}      >
                                    <option value="">Selecciona una opción</option>
                                    <option value="Corto">Corto</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Largo">Largo</option>
                                </select>

                                <label>¿Qué tipo de vehículo estás considerando? </label>
                                <select
                                    className="ComboBox" value={chatgpt.tipoVehiculo} onChange={onTipoVehiculoChange}   >
                                    <option value="Tipo de Automovil">Tipo de Automovil</option>
                                    <option value="Camioneta">Camioneta</option>
                                    <option value="SUV">SUV</option>
                                    <option value="4X4">4X4</option>
                                </select>

                            </div>
                            <button type="submit" className="btn btn-primary">
                                Consultar
                            </button>
                            <br />
                            {showGif && <img src={gifs} alt="GIF" />}
                        </form>
                    </div>
                </div>
            </section>
            <section className="jobs">
                <div className="container">
                    <div className="company-list">
                        <div className="row">
                            <div className="col-md-10 col-sm-10">
                                <div className="company-content">
                                    <p>
                                        <span className="company-location"> {respuesta} </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Link to="/listchat" className="btn brows-btn">
                            Ver todas las preguntas
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegChat;
