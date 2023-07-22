const Principe = () =>{
    return(<>
    <section className="pricind">
			<div className="container">
				<div className="col-md-4 col-sm-4">
					<div className="package-box">
						<div className="package-header">
							<i className="fa fa-cog" aria-hidden="true"></i>
							<h3>Plan Regular</h3>
						</div>
						<div className="package-info">
							<ul>
							<li>Acceso básico y gratuito a nuestros servicios de asesoramiento para préstamos de autos.</li>
							<li>Orientación experta en la selección del préstamo de auto adecuado para tus necesidades y presupuesto.</li>
							<li>Evaluación de diferentes opciones de préstamos disponibles en el mercado.</li>
							<li>Recomendaciones personalizadas basadas en tu perfil y preferencias.</li>
							<li>Soporte al cliente para responder tus preguntas y brindarte asistencia durante el proceso de selección.</li>
							</ul>
						</div>
						<div className="package-price">
							<h2><sup></sup>Gratis<sub></sub></h2>
						</div>
						<button type="submit" className="btn btn-package">Registrate</button>
					</div>
				</div>
				<div className="col-md-4 col-sm-4">
					<div className="package-box">
						<div className="package-header">
							<i className="fa fa-star-half-o" aria-hidden="true"></i>
							<h3>Plan Standard</h3>
						</div>
						<div className="package-info">
							<ul>
							<li>Todos los beneficios del Plan Regular</li>
							<li>Asesoramiento especializado para acceder a préstamos de autos con condiciones más favorables.</li>
							<li>Análisis detallado de tasas de interés, plazos de pago y términos del préstamo.</li>
							<li>Asistencia en la preparación de la documentación necesaria y en la solicitud del préstamo.</li>
							<li>Comparación de diferentes entidades financieras y sus ofertas de préstamos de autos.</li>
							</ul>
						</div>
						<div className="package-price">
							<h2><sup>$ </sup>4.99<sub>/Month</sub></h2>
						</div>
						<button type="submit" className="btn btn-package">Registrate</button>
					</div>
				</div>
				<div className="col-md-4 col-sm-4">
					<div className="package-box">
						<div className="package-header">
							<i className="fa fa-cube" aria-hidden="true"></i>
							<h3>PLan Premium</h3>
						</div>
						<div className="package-info">
							<ul>
							<li>Todos los beneficios del Plan Standard y un Acesoramiento exclusivo</li>
							<li>Asesoramiento exclusivo y personalizado de nuestro equipo de expertos en préstamos de autos.</li>
							<li>Acceso a ofertas premium y condiciones preferenciales en préstamos de autos.</li>
							<li>Análisis detallado de los beneficios y ventajas adicionales de cada opción de préstamo.</li>
							<li>Apoyo integral durante todo el proceso de selección y contratación del préstamo.</li>
							</ul>
						</div>
						<div className="package-price">
							<h2><sup>$ </sup>14.99<sub>/Month</sub></h2>
						</div>
						<button type="submit" className="btn btn-package">Registrate</button>
					</div>
				</div>
			</div>
		</section>
    </>)
}
export default Principe