
import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/global.scss';
import { ExpensesForm } from "../../components/FormTypes/ExpensesForm";

export function NewExpenses(){
    return(
        <div id="page-expenses">
            <HeaderMenu isHideButtonSaveForm isHideButtonCreate/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <ExpensesForm/>
                </div>
            </main>
        </div>
    )
}