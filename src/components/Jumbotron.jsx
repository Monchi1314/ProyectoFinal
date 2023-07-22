import React from 'react'

const Jumbotron = () => {
    const estilo1={background:"#242c36 url(img/slider-01.jpg) no-repeat"}
  return (
    <>
        <section className="main-banner" style={estilo1}>
			<div className="container">
				<div className="caption">
					<h2>ACESOR DE PRESTAMOS DE AUTOS</h2>
                    <br />
                    <h3>Puedes realizar tus consultas al ChatGTP utilizando este sitio WEB para todo lo que necesite</h3>
				</div>
			</div>
		</section>
    
    </>
  )
}

export default Jumbotron