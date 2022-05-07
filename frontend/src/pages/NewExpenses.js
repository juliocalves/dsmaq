import { HeaderMenu } from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";
import '../style/global.scss';

export function NewExpenses(){
    return(
        <div id="page-expenses">
            <HeaderMenu isHideButtonCreate/>
            <main>
                <SideMenu/>
                <div className="main-content">
                </div>
            </main>
        </div>
    )
}