import {Typewriter} from 'react-simple-typewriter';
import './Hero.css';
import hero_img from '../../assets/profile.png';
function Hero(){
  return(
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h2>I`m Singidi Sai Naga Sudheer Here </h2>
            <h1><Typewriter words={["FrontEnd Developer","FrontEnd Engineer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /></h1>
            <p>Successful completion of my first portfolio website</p>
            <div className="hero-right">
                <div className="hero_img">
                  
                  <img src={hero_img} alt="hero_img" />
                
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero