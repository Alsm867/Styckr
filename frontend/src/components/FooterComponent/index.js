import './FooterComponent.css';
import About from "../AboutComponent";


function FooterComponent() {


    return (
        <div className="Footer">
            <img className='git' src='https://res.cloudinary.com/dzjkwepju/image/upload/v1634251277/Styckr/zzzzzz_tfz2rt.png' alt='github'/><a className="my-hub"href="https://github.com/Alsm867">Sam Ortega</a>
        <About/>
        </div>
    );
}

export default FooterComponent;
