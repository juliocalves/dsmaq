
import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { SuplyerAddressForm } from "../../components/FormTypes/SuplyerAddressForm";

export function NewSuplyerAddress(){
    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <SuplyerAddressForm/>
                </div>
            </main>
        </div>
    )
}