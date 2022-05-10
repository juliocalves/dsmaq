
import { HeaderMenu } from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import '../style/global.scss';
import { ExpensesForm } from "../components/formTypes/ExpensesForm";

export function NewExpenses(){
    return(
        <div id="page-expenses">
            <HeaderMenu isHideButtonCreate/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <ExpensesForm/>
                </div>
            </main>
        </div>
    )
}