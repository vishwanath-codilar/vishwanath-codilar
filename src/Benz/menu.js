import imge1 from './images/info.png';
import imge2 from './images/search1.png';
import imge3 from './images/b-menu.jpg';
import './menu.css';
function Menu(){
    return(
        <div className="right">
                   <div className="upper">
                       <span className="info"><img src={imge1} alt="" /></span><span className="policy">Provider/Privvacy Statement</span>
                       <span className="d">Deutsch</span>
                   </div>
                <div className="lower">
                <a href="#"><img src={imge2} class="img2" alt="" /></a>
                    <input type="checkbox" id="check" />
                       <label for="check" class="checkbtn"><img src={imge3} alt="" /></label>
                    <ul>
                           <li>Company
                            
                        </li>
                           <li>Vechicnavbtnles</li>
                           <li>Design</li>
                           <li>Innovation</li>
                           <li>Museum & History</li>
                           <li>Sports</li>
                           <li>Events</li>
                           <li>lifestyle</li>
                           <li><div className="search-box"><span><img  src={imge2} alt="" /></span>
                           <span className="s-text"> Search</span></div></li>
                       </ul>
                       
                    </div>
               </div>
        
    );
}
export default Menu;
