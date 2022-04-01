import { HeaderMenu} from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import '../style/global.scss';

export function Calendar(){
    return(
        <div id='page-calendar'>
             <HeaderMenu  isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                </div>
            </main>
        </div>
    )
}