import React from "react"; 
import logo from "../Lonwabo.jpg";
const AboutMe = () =>{
    return (
        <div class="section">
                <div class="title">
                <h2>about me</h2>
                
                </div>
        
                <div class="about-center section-center">
                <article class="about-img">
                    <img className="imageSize" src={logo} alt="logo.."/>
                </article>
                <article class="about">
                    
                    <div class="about-content">
                    
                    <div class="content active" id="history">
                        
                        <p>
                            Hi, I am Lonwabo Sandi, I am a Website Developer , mainly focus on the 
                            frontend developement but i am also a backend Website Developer. I am 
                            Proficient in HTML,CSS,JavaScript and also JS frameworks which are React and Vue. 
                            I also have a basic knowledge of PHP and Node also working with SQL. I am 
                            passionate about designing and developing websites, Very profesional and ethical
                            about my work. 
                        </p>
                    </div>
                    
                   
                    
                    
                    </div>
                </article>
                </div>
            </div>
    )
}

export default AboutMe;