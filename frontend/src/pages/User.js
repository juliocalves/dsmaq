import { UserForm } from "../components/formTypes/UserForm";
import { HeaderMenu} from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

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