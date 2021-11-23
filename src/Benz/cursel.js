import image2 from './images/c2.png';
import image3 from './images/c4.png';
import image4 from './images/c3.png';
import image5 from './images/car.jpg';
import image6 from './images/car1.jpg';
import image7 from './images/share.png';
import image8 from './images/ins.png';
import image9 from './images/facebook.png';
import './cursel.css';
function Carousel(){
    return(
        <>
        <div className="carousel">
            <div className="carousel-inner">
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                <div className="carousel-item">
                    <img src={image2} alt="" />
                </div>
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                <div className="carousel-item">
                    <img src={image3} alt=""/>
                </div>
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                <div className="carousel-item">
                    <img src={image4} alt=""/>
                </div>
                <label for="carousel-3" className="carousel-control prev control-1">‹</label>
                <label for="carousel-2" className="carousel-control next control-1">›</label>
                <label for="carousel-1" className="carousel-control prev control-2">‹</label>
                <label for="carousel-3" className="carousel-control next control-2">›</label>
                <label for="carousel-2" className="carousel-control prev control-3">‹</label>
                <label for="carousel-1" className="carousel-control next control-3">›</label>
                
            </div>
            <div className="icons">
                <div className="icon1"> <a href="#"> <img src={image5} alt="" /></a>
                      <a    className="conf">Product page</a>
                </div>
             <div className="icon2">
                 <a href="#"> <img src={image6} alt=""/></a>
                       <a className="conf">Configurator</a>
                </div>
           <div className="icon3"> 
                <a>
                    <img src={image7} alt="" /> </a>
                        <span className="hide">Share</span>
                          <span className="show"><img src={image8} alt="" /><img src={image9} alt="" />
                          </span>
               
            </div>
            </div>
        </div>
        <div class="search-bar">
               <input type="search" placeholder="I am looking for......" />
           </div>
        </>
    );
}
export default Carousel;