import { useEffect, useState } from 'react'

import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";
import api from '../../hooks/useApi';

import '../../style/suplyergroup.scss';
import '../../style/global.scss';


export function SuplyerGroup(){
    const [suplyerGroup,setSuplyerGroup] = useState([]);
    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }
    useEffect(() => {
        api.get('/suplyergroup/suplyersgroups',auth).then(
            response => {setSuplyerGroup(response.data);
            },token)
        })
    return(
        <div id="page-suplyergroup">
            <HeaderMenu   isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className='result-list-suplyergroup'>
                        <div className="list-suplyergroup">
                            {suplyerGroup.map((suplyerGroup)=>{
                                const {description} = suplyerGroup;
                                return(
                                    <div className="card-item-suplyergroup" key={suplyerGroup.id}>
                                        <div className="header-card-item-suplyergroup">
                                            <label>{description}</label>
                                        </div>
                                        <div className="card-item-suplyergroup-content">
                                            <label>contagem de fornecedores</label>
                                            <label>Listar</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}