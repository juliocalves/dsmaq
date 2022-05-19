
import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { FormPaymentForm } from "../../components/FormTypes/FormPaymentForm";

export function NewFormPayment(){
    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <FormPaymentForm/>
                </div>
            </main>
        </div>
    )
}