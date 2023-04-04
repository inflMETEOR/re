import './Section.css'
import main from './img_section/main.png'
import play from './img_section/play.png'




const Section = () => {
    return (
        <section className="section">
        <div className="text">
            <h1 id="h1" class="name">ПРОФЕСІЙНИЙ</h1>
            <h1 className="name">КІК-КОНСАЛТИНГ</h1>
            <ul className="ul">
                <li className="li"><h2>Як визначити, чи поширюються на Вас прапвові норми щодо КІК?</h2></li>
                <br></br>
                <li className="li"><h2 id="h22">Як володіти іноземними компаніями та не мати проблем з контрольними органами</h2></li>
            </ul>
            <div className="down">
                <button id="button">Потрібна консультація</button>
                <div className="quesion">
                    <a href="https://instaco.com.ua/news/k-k-shcho-tse-opodatkuvannya-pributku-k-k-pochinayuchi-z-01-sichnya-2022-roku" ><img src={play} alt="" id="strilka" /></a>
                    <h2 id="a">Що таке правила КІК?</h2>
                </div>
            </div>
        </div>
        <div className="img">
            <img src={main} alt=""/>
        </div>
    </section>
    )
}

export default Section