import React from 'react';
import runBuddy from './runbuddy.png';
import moolah from './moolah.png';
import traveldog from './Traveldog.png';

function MyWork() {
    return (
        <div>
        <section id="My-work" className="mywork">
        <div className="myworkheading">
            <h2>
             My work
            </h2>
        </div>


        <div className="firstproject">
            <div className="firstprojecttext">
                <h3 className="projectname">Run Buddy</h3>
            </div>
            <div className="firstprojectimage">
                    <a href ="https://japjeet1975.github.io/run-buddy/"> 
                    <img src = {runBuddy} alt="run buddy website" />
                    </a> 
            </div>
              
        </div>
      
       
       <div className="otherprojects">
            <div className="otherproject" >
               <div className="otherprojecttext">
                   <h3 className="projectname">Moolah</h3>
               </div>
                <div className="otherprojectimage">
                    <a href="https://git.heroku.com/moolahwallet.git">
                        <img src={moolah} alt="picture of horiseon website" />
                    </a>
                </div>
                         
            </div>
          


            <div className="otherproject">
                <div className="otherprojecttext">
                   <h3 className="projectname">TravelDog</h3>
                </div>
                <div className="otherprojectimage">
                    <a href="https://uot-team6.github.io/travelDog/">
                        <img src={traveldog} alt="picture of project1 TravelDog" />
                    </a>
                </div>

            </div>
       
       </div>
      
      
      
      
      </section>
      </div>
    )
}
export default MyWork;