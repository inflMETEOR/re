import './Footer.css'
import logo1 from './img_footer/logo1.png'
import phonee from './img_footer/phonee.png'
import facebook from './img_footer/facebook.png'
import instagram from './img_footer/instagram.png'
import linkedin from './img_footer/linkedin.png'
import youtube from './img_footer/youtube.png'
import logo3 from './img_footer/logo3.png'





const Footer = () => {
    return(
        <footer className="footer">
        <div className="conteiner__footer">
            <div className="height1">
                
                <img src={logo1} alt="" id="logo1"/>
                <a href="" className="infa1">ПРО НАС</a>
                <a href="" classNmae="infa1">КОНЦЕПЦІЯ КІК</a>
                <a href="" classNmae="infa1">ПОСЛУГИ</a>
                <a href="" className="infa1">НАШІ ПРОЕКТ</a>
                <a href="" className="infa1">КОНТАКТИ</a>
                <div className="teleph1">
                    <img src={phonee} alt="" id="teleph"/>
                    <h3 id="i" className="h3">+380(44)299 09 66</h3>
                </div>
                <div class="social1">
                    <a href=""><img src={facebook} alt=""/></a>
                    <a href=""><img src={instagram} alt="" className="o"/></a>
                    <a href=""><img src={linkedin} alt="" className="o"/></a>
                    <a href=""><img src={youtube} alt="" className="o"/></a>
                    </div>
                    
            </div>
            <div id="border"></div>
            <div classNmae="height2">
                    
                <h4 id="one" class="h4">® Всі права захищено 2022 SAIVENA Group</h4>
                <h4 className="h4">Політика конфіденційності</h4>
                <div id="lastText">
                     <img src={logo3} alt=""/>
                     <h4 id="two" className="h4">Розроблено Avis Digital Studio</h4>
                </div>
                    
            </div>
        </div>
    
    </footer>

    )
}