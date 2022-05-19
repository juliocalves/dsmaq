
import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { SuplyerForm } from "../../components/FormTypes/SuplyerForm";

export function NewSuplyer(){
    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <SuplyerForm/>
                </div>
            </main>
        </div>
    )
}