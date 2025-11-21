import "./Footer.css"

function Footer(){
    return(
        <footer className="footer-container">
            <p>
                &copy; {new Date().getFullYear()} Website Services
            </p>
        </footer>
    );
}

export default Footer