import m1 from './images/p1.webp';
import m2 from './images/p2.webp';
import m3 from './images/p3.webp';
import m4 from './images/n2.png';
import m5 from './images/star.png';
import m6 from './images/ploay.jpg';
import './text.css';
function Text(){
    return(
        <div className="text">
         <div className="container-2">
                  <div className="inner">
                      <h1>Welcome to the Mercedes-Benz international <br />website.</h1>
                      <p>Exclusive reports and current films: experience a broad range of topics from the <br />fascinating world of Mercedes-Benz. To find out about offers in your location, please go <br />to the local Mercedes-Benz website.</p>
                      <p>This is the International website of Mercedes-Benz AG.<br />
                        Visitors from the U.S., please visit our U.S. website www.mbusa.com</p>
                        <div className="btn"><button type="button">Bringring me to my local website</button></div>
                  </div>
                  
              </div> 
              <div className="links">
                  <span className="col1"><img src={m1} alt="" /></span>
                  <span className="col2"> <img src={m2} alt="" /></span>
                 <span className="col3"><img src={m3} alt="" /></span>
                        </div>
              <div className="container-3">
                  <button> <img src={m4} alt="" /> <a>News</a></button>
                  <button><img src={m5} alt="" /><a>Popular</a></button>
                  <button><img src={m6} alt="" /><a>Video</a></button>
              </div> 
        </div>
    );
}
export default Text;