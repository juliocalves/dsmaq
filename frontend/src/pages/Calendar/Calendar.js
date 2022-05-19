import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { CalendarMonth } from "../../components/Calendar/CalendarMonth";

export function Calendar(){
    

    return(
        <div id='page-calendar'>
             <HeaderMenu  isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <CalendarMonth/>
                </div>
            </main>
        </div>
    )
}