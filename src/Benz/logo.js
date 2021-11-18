import imge from './images/123.png';
import './logo.css';
function Logo(){
    return(
        <div className="logo">
            <span>  <img src={imge} alt="" /></span>
                <span class="text"> Mercedes-Benz</span>
        </div>

    );
}
export default Logo;