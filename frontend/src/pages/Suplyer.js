
import { HeaderMenu } from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import '../style/suplyer.scss';
import '../style/global.scss';
import { Button } from "../components/ButtonTypes/Button";


import monogram from '../assets/img/monogram.svg'

export function Suplyer(){

    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className="suplyer">
                        <div className="card-view-suplyer">
                            <div className="header-card-view-suplyer">
                                <div className="suplyer-inf">
                                    <img src={monogram} alt="" />
                                    <div className="suplyer-inf1">
                                        <p>Razão Social</p>
                                        <span>WEG EQUIPAMENTOS ELETRONICOS S/A</span>
                                    </div>
                                </div>
                                <div className="group-inf">
                                    <Button isOutlined>
                                    <span>Grupo</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="content-card-view-suplyer">
                                <p>Nome fantasia</p>
                                <p>WEG</p>
                                <p>Av Prefeito Waldemar Grubba</p>
                            </div>
                            <div className="footer-card-view-suplyer">
                                    <Button isOutlined>
                                        <span>Editar</span>
                                    </Button>
                                    <Button isOutlined>
                                        <span>Histórico</span>
                                    </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}