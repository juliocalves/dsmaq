import { useEffect, useState } from 'react'

import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";
import api from '../../hooks/useApi';

import '../../style/formpayment.scss';
import '../../style/global.scss';


export function Payment(){
    const [FormPayment,setFormPayment] = useState([]);
    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }
    useEffect(() => {
        api.get('/formpayment/formspayment',auth).then(
            response => {setFormPayment(response.data);
            },token)
        })
    return(
        <div id="page-formpayment">
            <HeaderMenu   isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className='result-list-formpayment'>
                        <div className="list-FormPayment">
                            {FormPayment.map((FormPayment)=>{
                                const {description} = FormPayment;
                                return(
                                    <div className="card-item-formpayment" key={FormPayment.id}>
                                        <div className="header-card-item-formpayment">
                                            <label>{description}</label>
                                        </div>
                                        <div className="card-item-formpayment-content">
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