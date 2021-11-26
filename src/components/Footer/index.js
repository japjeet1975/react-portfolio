import React from 'react';
import gitHubLogo from './github.png'
import linkedInLogo from './linkedin.png'
import emailLogo from './email.jpg'

function Footer() {
    return(
        <div>
            <section id="Contactme" className="Contactme">
         <h2> Contact Me 
        </h2>

      <div className="contact-info">

        <div className="emailaddress">
			<p>
				<a href="mailto:japjeet1975@gmail.com"><img src={emailLogo} alt="email logo" /></a>
			</p>
	</div>
	
	<div className="linkedin">		
			<p>
				<a href="https://www.linkedin.com/in/japjeet-kaur-profile/" target="_blank" rel="noreferrer"><img src={linkedInLogo} alt="linkedin logo" /></a>
			</p>
	</div>
	
	<div className="github">	<p>	
				<a href="https://github.com/japjeet1975" target="_blank" rel="noreferrer"><img src={gitHubLogo} alt="github logo" /> </a>
		</p></div>
     </div>                

</section>
        </div>
    )
}
export default Footer;