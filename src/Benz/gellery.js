import im1 from './images/1.webp';
import im3 from './images/2.jpeg';
import im4 from './images/3.webp';
import im5 from './images/4.webp';
import im6 from './images/5.webp';
import im7 from './images/6.webp';
import im8 from './images/7.webp';
import im9 from './images/8.webp';
import im10 from './images/9.webp';
import im11 from './images/10.webp';
import im12 from './images/11.webp';
import im13 from './images/12.webp';
import im14 from './images/13.webp';
import im15 from './images/14.webp';

import './gellery.css';
function Gellery(){
    return(
          <>
           <div className="gellary">
                <div className="row1">
                    <span className="col1"><img src={im1} alt="" />
                +
                    </span>
                    <span className="col2"><img src={im3} alt="" />
                        <img src={im4} alt="" />
                    </span>
                </div>
                   <div className="row2">
                    <span className="col1"><img src={im5} alt="" /></span>
                    <span className="col2"><img src={im6} alt="" /></span>
                    <span className="col3"><img src={im7} alt="" /></span>
                   </div>
            
                <div className="row2">
                 <span className="col1"><img src={im8} alt="" /></span>
                 <span className="col2"><img src={im9} alt="" /></span>
                 <span className="col3"><img src={im10} alt=""/></span>
                </div>
                <div className="row1">
                    <span className="col1"><img src={im11} alt="" /></span>
                    <span className="col2"><img src={im12} alt="" />
                        <img src={im13} alt="" />
                    </span>
                </div>
                <div className="row2">
                    <span className="col1"><img src={im14} alt="" /></span>
                    <span className="col2"><img src={im15} alt="" /></span>
                    <span className="col3"><img src="" alt="" /></span>
                   </div>
                      
              </div>   
          </>
    );
}
export default Gellery;