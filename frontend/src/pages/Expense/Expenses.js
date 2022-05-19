import { HeaderMenu} from "../../components/Menu/HeaderMenu";
import { SideMenu } from "../../components/Menu/SideMenu";

import '../../style/expenses.scss';
import '../../style/global.scss';

import monogram from '../../assets/img/monogram.svg'
import pay from '../../assets/img/pay_icon.svg'
import { IconButton } from '../../components/ButtonTypes/IconButton'
import api from '../../hooks/useApi';
import { useEffect, useState } from 'react'

export function Expenses(){
    const [expenses, setExpenses] = useState([]);
    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }
     
    useEffect(() => {
        api.get('/expenses/getexpenses',auth).then(
            response => {setExpenses(response.data);
            },token)
        })
    return(
        <div id='page-expenses'>
            <HeaderMenu isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className="expense">
                        {expenses.map((expenses)=>{
                            const{issueDate,suplyerId,document,deadline,installmentValue, installmenteNumber, formPaymentId} = expenses;
                            return(
                                <div className="card-view-expense">
                                    <div className="header-card-view-expense">
                                        <div className="expense-inf">
                                            <img src={monogram} alt="" />
                                            <div className="expense-inf1">
                                                <p>Razão Social</p>
                                                <span>{suplyerId}</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="content-card-view-expense">
                                        <div>
                                            <p>Data vencimento</p>
                                            <span>{deadline}</span>
                                        </div>
                                        <div>
                                            <p>Valor Parcela</p>
                                            <span>{installmentValue}</span>
                                        </div>
                                        <div>
                                            {/* <p>Realizar Pagamento</p> */}
                                            <IconButton icon={pay} name={'payment'}/>
                                        </div>
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