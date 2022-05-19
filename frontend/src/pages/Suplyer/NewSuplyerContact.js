
import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { SuplyerContactForm } from "../../components/FormTypes/SuplyerContactForm";

export function NewSuplyerContact(){
    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <SuplyerContactForm/>
                </div>
            </main>
        </div>
    )
}