import { HeaderMenu} from "../components/HeaderMenu";
import { SideMenu } from "../components/SideMenu";

import '../style/expenses.scss';
import '../style/global.scss';

import monogram from '../assets/img/monogram.svg'
import pay from '../assets/img/pay_icon.svg'
import { IconButton } from '../components/ButtonTypes/IconButton'



export function Expenses(){
    return(
        <div id='page-expenses'>
            <HeaderMenu isHideButtonSaveForm/>
            <main>
                <SideMenu/>
                <div className="main-content">
                    <div className="expense">
                        <div className="card-view-expense">
                            <div className="header-card-view-expense">
                                <div className="expense-inf">
                                    <img src={monogram} alt="" />
                                    <div className="expense-inf1">
                                        <p>Razão Social</p>
                                        <span>WEG EQUIPAMENTOS ELETRONICOS S/A</span>
                                    </div>
                                </div>
                            </div>
                            <div className="content-card-view-expense">
                                <div>
                                    <p>Data vencimento</p>
                                    <span>02/04/2022</span>
                                </div>
                                <div>
                                    <p>Valor Parcela</p>
                                    <span>R$ 5.000,00</span>
                                </div>
                                <div>
                                    {/* <p>Realizar Pagamento</p> */}
                                    <IconButton icon={pay} name={'payment'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>        
        </div>
    )
}