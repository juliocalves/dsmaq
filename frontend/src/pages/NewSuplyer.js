
import { HeaderMenu } from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import '../style/global.scss';
import { SuplyerForm } from "../components/formTypes/SuplyerFom";

export function NewSuplyer(){
    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonCreate/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <SuplyerForm/>
                </div>
            </main>
        </div>
    )
}