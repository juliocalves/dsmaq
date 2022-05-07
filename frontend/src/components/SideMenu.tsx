/**
 * Icones menu
 */
 import suplyer from '../assets/img/suplyer_icon.svg'
 import user from '../assets/img/newUser.svg'
 import calendar from '../assets/img/calendar_icon.svg'
 import cash from '../assets/img/cash_icon.svg'
 import suplyer_group from '../assets/img/suplyer_group_icon.svg'
//  import dashboard from '../assets/img/dashboard_icon.svg'
//  import config from '../assets/img/config_icon.svg'
 
 /**
  * Style menu
  */
 import './side-menu.scss';
 
 
 import { useNavigate } from 'react-router-dom'
 import { IconButton } from './ButtonTypes/IconButton'
 
 
 export function SideMenu(){
     const navigator = useNavigate();
    
     function handleClickSuplyer(){
        navigator('/suplyer');
    };
    function handleClickUser(){
        navigator('/users');
    };
     
     function handleClickExpenses(){
        navigator('/expenses');
     };

     function handleClickCalendar(){
        navigator('/calendar');
     };
     
     function handleClickSuplyerGroup(){
        navigator('/suplyergroup');
     };

     return(
         <div id='menu-component'>
             <aside>
                 <div className='menu-itens'>
                     <IconButton onClick={handleClickUser}
                      icon={user}  name={'user'}
                      />
                     <IconButton onClick={handleClickSuplyer}
                      icon={suplyer}  name={'suplyer'}/>
                     <IconButton onClick={handleClickExpenses} 
                     icon={cash} name={'expenses'}/>
                     <IconButton onClick={handleClickCalendar} 
                     icon={calendar} name={'calendar'}/>
                     <IconButton onClick={handleClickSuplyerGroup}
                     icon={suplyer_group} name={'suplyergroup'}/>
                     {/* <IconButton icon={dashboard} name={''}/>
                     <IconButton icon={config} name={''}/> */}
                 </div>
             </aside>
         </div>
     )
 }