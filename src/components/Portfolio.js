import React from "react"; 
import pic1 from "../images/pic1.png"; 
import pic2 from "../images/pic2.jpg"; 
import pic3 from "../images/pic2.png"; 
import pic4 from "../images/pic4.jpg"; 
import pic5 from "../images/pic5.jpg"; 
import pic6 from "../images/pic6.jfif"; 
import pic7 from "../images/pic7.jpg"; 
import {Link} from 'react-router-dom'

const Portfolio =()=>{
    return (
       
        <div>
        <div className="container-image">
            <div className="image-menu">
                <h1>Youtube Channel</h1>
                <img  src={pic1} alt="pic1.."/>
            </div>
            <div className="image-menu">
                <h1>Resturant's Menu</h1>
                <img  src={pic2} alt="pic2.."/>
            </div>
            <div className="image-menu">
                <h1>Four Wheel Chasers</h1>
                <img  src={pic3} alt="pic3.."/>
            </div>
            <div className="image-menu">
                <h1>E-Commerce</h1>
                <img  src={pic4} alt="pic4.."/>
            </div>
            <div className="image-menu">
                <h1>Methodist Church</h1>
                <img  src={pic5} alt="pic5.."/>
            </div>
            <div className="image-menu">
                <h1>Budget App</h1>
                <img  src={pic6} alt="pic6.."/>
            </div>
            <div className="image-menu">
                <h1>Classical Choral Singers and Academy</h1>
                <img  src={pic7} alt="pic7.."/>
            </div>
            
        </div>
    </div>
    )
}

export default Portfolio; 