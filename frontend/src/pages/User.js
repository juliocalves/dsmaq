import { UserForm } from "../components/FormTypes/UserForm";
import { HeaderMenu} from "../components/Menu/HeaderMenu";
import { SideMenu } from "../components/Menu/SideMenu";

export function User(){

    return(
        <div id="page-user">
            <HeaderMenu  isHideButtonCreate isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                  <UserForm/>
                </div>
            </main>
        </div>
    )
}