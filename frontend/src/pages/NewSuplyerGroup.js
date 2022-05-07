
import { HeaderMenu } from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import '../style/global.scss';
import { SuplyerGroupForm } from "../components/formTypes/SuplyerGroupForm";

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