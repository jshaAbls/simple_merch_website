import React from 'react';
import "./About.css";

// images
import me from "./assets/bakroms.jpg";
import me2 from "./assets/eme.jpg";
import me3 from "./assets/grey.jpg";

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>

            <div className="img-main"> 
                <div className="img-card">
                    <img src={me} alt="Me"/>
                    <div className="overlay"><p>Founder</p></div>
                </div>

                <div className="img-card">
                    <img src={me2} alt="Me 2"/>
                    <div className="overlay"><p>Co-Founder</p></div>
                </div>

                <div className="img-card">
                    <img src={me3} alt="Me 3"/>
                    <div className="overlay"><p>Designer</p></div>
                </div>
            </div>

            <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias debitis laudantium mollitia in ipsa nobis fugiat quia eius quasi, omnis velit distinctio, fuga totam suscipit explicabo obcaecati, quidem nulla possimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
        </div>
    );
};

export default About;
