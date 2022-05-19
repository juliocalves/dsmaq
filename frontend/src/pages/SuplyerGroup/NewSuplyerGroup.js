
import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { SuplyerGroupForm } from "../../components/FormTypes/SuplyerGroupForm";

export function NewSuplyerGroup(){
    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <SuplyerGroupForm/>
                </div>
            </main>
        </div>
    )
}