import { HeaderMenu} from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import previusIcon from "../assets/img/previusIcon.svg";
import nextIcon from "../assets/img/nextIcon.svg";


import '../style/global.scss';
import '../style/calendar.scss';

export function Calendar(){
    

    return(
        <div id='page-calendar'>
             <HeaderMenu  isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className="full-calendar">
                        <div className="calendar-header">
                            <div className="calendar-navigate">
                                <button onClick={''}>
                                    <img src={previusIcon} alt="previus" />
                                </button>
                                <span>{}</span>
                                <button onClick={''}>
                                    <img src={nextIcon} alt='next'/>
                                </button>
                            </div>
                            <div>
                                <ul className='calendar-select'>
                                    <button>Hoje</button>
                                    <button>Dia</button>
                                    <button>Semana</button>
                                    <button>Mês</button>
                                </ul>                                                                                                                           
                            </div>
                        </div>
                        <div className="month-calendar">
                            <div className="grid">
                                <div className="collumheader">
                                    <div>DOM.</div>
                                    <div>SEG.</div>
                                    <div>TER.</div>
                                    <div>QUA.</div>
                                    <div>QUI.</div>
                                    <div>SEX.</div>
                                    <div>SÁB.</div>
                                </div>
                                <div className="row">
                                    <div className="days" ></div>
                                    <div className="days"></div>
                                    <div className="days"></div>
                                    <div className="days"></div>
                                    <div className="days"></div>
                                    <div className="days"></div>  
                                    <div className="days"></div>  
                                </div>
                                <div className="row">
                                    <div className="days">1</div>
                                    <div className="days">2</div>
                                    <div className="days">3</div>
                                    <div className="days">4</div>
                                    <div className="days">5</div>
                                    <div className="days">6</div>  
                                    <div className="days">7</div>  
                                </div>
                                <div className="row">
                                    <div className="days">1</div>
                                    <div className="days">2</div>
                                    <div className="days">3</div>
                                    <div className="days">4</div>
                                    <div className="days">5</div>
                                    <div className="days">6</div>  
                                    <div className="days">7</div>  
                                </div>
                                <div className="row">
                                    <div className="days">1</div>
                                    <div className="days">2</div>
                                    <div className="days">3</div>
                                    <div className="days">4</div>
                                    <div className="days">5</div>
                                    <div className="days">6</div>  
                                    <div className="days">7</div>  
                                </div>
                                <div className="row">
                                    <div className="days">1</div>
                                    <div className="days">2</div>
                                    <div className="days">3</div>
                                    <div className="days">4</div>
                                    <div className="days">5</div>
                                    <div className="days">6</div>  
                                    <div className="days">7</div>  
                                </div>
                                <div className="row">
                                    <div className="days">1</div>
                                    <div className="days">2</div>
                                    <div className="days">3</div>
                                    <div className="days">4</div>
                                    <div className="days">5</div>
                                    <div className="days">6</div>  
                                    <div className="days">7</div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}