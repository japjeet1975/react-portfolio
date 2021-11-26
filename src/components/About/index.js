import React from 'react';
import profileImage from './profilepicture.png';

function About() {
    return(
        <section id="Aboutme" className="aboutme">
		<h2>About Me</h2>
		<div className="about-me-section">
			<div className="profilepic" >
				<img src={profileImage} alt="profile picture" />
			 </div>
		         <div class="intro">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sem nibh. Ut scelerisque turpis eu leo tempus tristique. Suspendisse at eros et arcu vulputate aliquet. Ut sollicitudin nibh quis turpis fringilla hendrerit. Nam interdum pharetra aliquet. Fusce sit amet odio eget augue blandit laoreet. Donec dictum dolor nulla, eu posuere elit sodales nec. Integer ullamcorper venenatis sapien ac porta. Vivamus in dignissim metus, nec fringilla lorem</p>
	                  </div>

		</div>
	   
    </section>
    )
}
    export default About;