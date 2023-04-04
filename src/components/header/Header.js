import './Header.css'
import logo from './img/saivena.png'
import phone from './img/phone.png'
import insta from './img/Group 17.png'
import facebook from './img/Group.png'

const Header = () => {
    return(
        <header className="header">
        <div></div>
        <img src={logo} alt="" id="logo"/>
        <a href="" className="infa">ПРО НАС</a>
        <a href="" className="infa">КОНЦЕПЦІЯ КІК</a>
        <a href="" className="infa">ПОСЛУГИ</a>
        <a href="" className="infa">НАШІ ПРОЕКТ</a>
        <a href="" className="infa">КОНТАКТИ</a>
        <div className="language">
         <a href="" className="infa">EN</a>
         <a href="" id="ua" className="infa">UA</a>
        </div>
        <div className="teleph">
         <img src={phone} alt="" id="teleph"/>
         <h3>+380(44)299 09 66</h3>
        </div>
        <div className="social">
         <div id="back">
             <img src={facebook} alt="" className="contact"/>
         </div>
         <div id="back1">
             <img src={insta} alt="" className="contack"/>
         </div>
        </div>
        <div></div>
    </header>
    )
}

export default Header