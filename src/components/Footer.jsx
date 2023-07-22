import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
			<div className="container">
				<div className="col-md-4 col-sm-6">
					<h4>Featured Job</h4>
					<ul>
						<li><a href="#">Browse Jobs</a></li>
						<li><a href="#">Premium MBA Jobs</a></li>
						<li><a href="#">Access Database</a></li>
						<li><a href="#">Manage Responses</a></li>
					</ul>
				</div>
				
				<div className="col-md-4 col-sm-6">
					<h4>Latest Job</h4>
					<ul>
						<li><a href="#">Browse Jobs</a></li>
						<li><a href="#">Premium MBA Jobs</a></li>
						<li><a href="#">Access Database</a></li>
					</ul>
				</div>
				
				<div className="col-md-4 col-sm-6">
					<h4>Reach Us</h4>
					<address>
					<ul>
					<li>1201, Murakeu Market, QUCH07<br/>
					United Kingdon</li>
					<li>Email: Support@job.com</li>
					</ul>
					</address>
				</div>
				
				 
				
			</div>
			<div className="copy-right">
			 <p>&copy;Copyright 2023 Car Rent </p>
			</div>
		</footer>
    </>
  )
}

export default Footer