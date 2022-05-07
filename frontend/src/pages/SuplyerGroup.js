import { HeaderMenu} from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";
import '../style/suplyergroup.scss';
import '../style/global.scss';
export function SuplyerGroup(){
    return(
        <div id="page-suplyergroup">
            <HeaderMenu   isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className="suplyergroup">
                        <div className="card-view-suplyergroup" >
                            <div className="header-card-view-suplyergroup">
                                <div className="suplyergroup-inf">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}