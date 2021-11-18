import Header from "./Header";
import Carousel from "./cursel";
import Text from "./text.js";
import Gellery from "./gellery";
import Footer from "./footer";
import './container.css';
function Container(){
    return(
        <div className="container">
        <Header />
        <Carousel />
        <Text />
        </div>
    );
}
export default Container;
