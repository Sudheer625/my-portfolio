import about_pic from '../../assets/Instagram DP .jpg'
import './About.css';
function About(){
  return(
    <>
        <div>
          <div className="about" id="about">
            <div className="about-left">
              <div className="about_pic">
                <img src={about_pic}  alt="" />
              </div>
              <div className="about-right">
                  <h2>About Me</h2>
                  <p>Love To Intrest in making of websites, Silly minded , Consistent worker , Manging Skills and  so on </p>
                  <div className="abt-btn">
                    <button>Linkedln Profile </button>
                    <button>GitHub Profile</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
export default About