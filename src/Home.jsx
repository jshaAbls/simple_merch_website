// design
import { use, useEffect } from "react";
import "./Home.css";

import products from "./products";




const Home = () => {
    useEffect(() => { 
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) =>{
                console.log(entry);
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                } else{
                    entry.target.classList.remove('show');
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    
    
        return () =>  observer.disconnect();
    }, []);

    return (
    <div className="main-container">
        <div className="home-container">
            <div className="description-header hidden">
                <h1>Welcome to Trendy Merch!</h1>
                <p>Your one-stop shop for exclusive merchandise.</p>
            </div>

            <section className="merch-section">
                <div className="merch-card">
                    <img src={products[0].src} style={{ width: "50%", maxHeight: "50%" }} />
                    <h2>Classic T-Shirts</h2>
                    <p>High-quality cotton tees with unique designs.</p>
                    <button>Shop Now</button>
                </div>
                <div className="merch-card">
                    <img src={products[5].src} style={{ width: "40%", maxHeight: "50%" }}  />
                    <h2>Cozy Hoodies</h2>
                    <p>Stay warm and stylish with our latest hoodies.</p>
                    <button>Shop Now</button>
                </div>
                <div className="merch-card">
                    <img src={products[9].src} style={{ width: "40%", maxHeight: "50%" }} />
                    <h2>Cool Accessories</h2>
                    <p>Complete your look with our exclusive accessories.</p>
                    <button>Shop Now</button>
                </div>
            </section>
        </div>

        
                <div className="home-container">
            <section className="merch-section">
                <div className="merch-card">
                <img src={products[4].src} 
                style={{ width: "40%", maxHeight: "50%" }} />
                    <h2>Classic T-Shirts</h2>
                    <p>High-quality cotton tees with unique designs.</p>
                    <button>Shop Now</button>
                </div>
                <div className="merch-card">
                    <img src={products[6].src} style={{ width: "40%", maxHeight: "50%" }} />
                    <h2>Cozy Hoodies</h2>
                    <p>Stay warm and stylish with our latest hoodies.</p>
                    <button>Shop Now</button>
                </div>
                <div className="merch-card">
                    <img src={products[8].src} style={{ width: "40%", maxHeight: "50%" }} />
                    <h2>Cool Accessories</h2>
                    <p>Complete your look with our exclusive accessories.</p>
                    <button>Shop Now</button>
                </div>
            </section>

            <div className="description-header hidden">
                <h1>Check out our latest arrivals!</h1>
                <p>Don't miss out on our exclusive new merchandise.</p>
            </div>
        </div>


    </div>
    );
};

export default Home;