import Smart from './images/smart.jpg';
import Daimler from './images/daimler.jpg';
import Amg from './images/amg.jpg';
import img1 from './images/petrol.png';
import img2 from './images/download.png';
import img3 from './images/petrol.png';
import facebook from "./images/facebook-logo.png";
import tweeter from "./images/tweeter.png";
import insta from "./images/inst.png";
import youtube from "./images/youtube.png"
import './footer.css';
function Footer(){
        return (
            <div className="footer">
                <div className="frow1">
                    <span><img src={img1} alt=""/>Kraftstoffverbrauch kombiniert</span>
                    <span className="h1"><img src={img2} alt=""/>CO₂-Emissionen kombiniert </span>  
                    <span className="h1"><img src={img3} alt=""/>Stromverbrauch im kombinierten Testzyklus </span>
                </div>
                <div className="frow2">
                    <p>Product may vary after press date on 05.09.2021.</p>
                    <p><sup>1</sup> Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
                    <p><sup>2</sup> Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich</p>
                    <p><sup>8</sup> Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
                    <p><sup>8</sup>Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
               
                </div>
                <div className="frow3">
                    <div className="fcol">
                        <div className="header1">More topics</div>
                        <hr className="hr1" />
                        <ol>
                        <li>Innovation</li>
                        <li>Design</li>
                        <li>Exhibitions</li>
                        <li>Museum & History</li>
                        <li>Sports</li>
                        <li>Driving Events</li>
                        <li>Mercedes me Portal</li>
                            </ol>
                    </div>
                    <div className="fcol">
                        <div className="header1">Shopping</div>
                        <hr className="hr1" />
                        <ol>
                        <li>Dealer Search</li>
                        <li>Mercedes-Benz Accessoires</li>
                        <li>Mercedes me connect Store</li>
                        <li>Service & Parts</li>
                        <li>Formula 1 Store</li>
                        <li>Mercedes-Benz Classic Center</li>
                            </ol>
                    </div>
                    <div className="fcol">
                        <div className="header1">All about cars</div>
                        <hr className="hr1" />
                        <ol>
                            <li>Model Overview</li>
                            <li>Configurator</li>
                            <li>Test Drive</li>
                            <li>Mercedes-Maybach</li>
                            <li>Mercedes me connect</li>
                            <li>Mercedes-Benz Ex-Factory Driving Aids</li>
                            <li>WLTP</li>
                            <li>RDE</li>
                            <li>Semiconductors supply situation</li>
                            <li>Li-Ion UN38.3</li>
                        
                        
                        </ol>
                    </div>
                    <div className="fcol">
                        <div className="header1">Discover more</div>
                        <hr className="hr1" />
                        <ol>
                        <li>Innovation</li>
                        <li>Design</li>
                        <li>Exhibitions</li>
                        <li>Museum & History</li>
                        <li>Sports</li>
                        <li>Driving Events</li>
                        <li>Mercedes me Portal</li>
                            </ol>
                    </div>
                </div>
                <div className="frow4">
                    <div className="header1">
                    Stay informed
                    </div>
                    <hr />
                    <p className="headline-info">Follow us and use the following social media platforms to get in contact with us and <br />
                    to share your passion for the brand, products and services of Mercedes-Benz.</p>
                    <ul className="social-media">
                        <li>   <img src={facebook} alt="" /></li>
                        <li>   <img src={tweeter} alt="" /></li>
                        <li>   <img src={insta} alt="" /></li>
                        <li>   <img src={youtube} alt="" /></li>
                        </ul>
                     <hr />
                    <div className="brand-image">
                    <div>   <img src={Amg} alt="" /></div>
                        <div className="daimler">   <img src={Daimler} alt="" /></div>
                        <div>   <img src={Smart} alt="" /></div>
                    </div>
                    
                    <hr />
                </div>
                
          </div>
        );
    }


export default Footer;