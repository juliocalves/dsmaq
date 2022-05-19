
import { useEffect, useState } from 'react'

import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";
import { Button } from "../../components/ButtonTypes/Button";
import monogram from '../../assets/img/monogram.svg'
import api from '../../hooks/useApi';

import '../../style/suplyer.scss';
import '../../style/global.scss';



export function Suplyer(){

    const [suplyers, setSuplyers] = useState([]);
    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }
     
    useEffect(() => {
        api.get('/suplyer/getsuplyers',auth).then(
            response => {setSuplyers(response.data);
            },token)
        })

    return(
        <div id="page-suplyer">
            <HeaderMenu isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className="suplyer">
                    {suplyers.map((suplyers)=>{
                        const {corporateName,fantasyName,socialRegistration,suplyerGoupId} = suplyers;
                        return(
                                <div className="card-view-suplyer"  key={suplyers.id}>
                                    <div className="header-card-view-suplyer">
                                        <div className="suplyer-inf">
                                            <img src={monogram} alt="" />
                                            <div className="suplyer-inf1">
                                                <p>{socialRegistration}</p>
                                                <span>{corporateName}</span>
                                            </div>
                                        </div>
                                        <div className="group-inf">
                                            <Button isOutlined>
                                            <span>{suplyerGoupId}</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="content-card-view-suplyer">
                                        <p>Nome fantasia</p>
                                        <p>{fantasyName}</p>
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
                        )
                    })}
                    </div>
                </div>
            </main>
        </div>
    )
}