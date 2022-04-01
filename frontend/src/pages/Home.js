/**
 * Importação de componentes para compor page home;
 * também os assets e o css utilizados para a estilização da page;
 * Essa page é a principal, onde o dashboard está localizado; 
 * pensar nas possibilidades de utlização de dashboard e inclusão de componente para deixar em modo noturno;
 */

 import { HeaderMenu} from "../components/HeaderMenu";
 import { SideMenu } from "../components/SideMenu";
 
 import arrowIcon from '../assets/img/arrow_icon.svg'
 
 import '../style/global.scss';
 import '../style/home.scss'
 
 
 export function Home(){
     
     /**
      * Page
      */
     return (
         <div id="page-home">
             <HeaderMenu  isHideButtonCreate isHideButtonSaveForm/>
             <main>
                 <SideMenu/>
                 <div className='main-content'>
                     <div className="inf-page">
                         <p>Foi realizado 3.000.000,00 em vendas no último mês</p>
                     </div>
                     <div className="sup-grafic">
                         <div className="filter-sup-grafic">
                             {/* Button não possuí um evento onclick */}
                             <span>Últimos 30 dias<button><img src={arrowIcon} alt="icon arrow" /></button></span>
                         </div>
                         <div className="inner-sup-grafic">
 
                         </div>
                     </div>
                     <div className="sub-grafic">
                         <div className="pizza-grafic"></div>
                         <div className="line-grafic"></div>
                         <div className="bar-grafic"></div>
                     </div>
                 </div>
             </main>
         </div>
     )
 }