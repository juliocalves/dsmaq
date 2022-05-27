import './form.scss'
import { TextType } from '../InputTypes/TextType'
import { useEffect, useState } from 'react'
import { Button } from '../ButtonTypes/Button'
import saveIcon from '../../assets/img/save_icon.svg'
import api from '../../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';

export function ExpensesForm (){
    const navigate = useNavigate();
    const[issueDate,setIssueDate] = useState('');
    const[suplyerId,setSuplyerId] = useState('');
    const[document, setDocument] = useState('');
    const[deadline, setDeadline] = useState('');
    const[installmentValue,setInstallmentValue] = useState('');
    const[installmentNumber,setInstallmentNumber] = useState('');
    const[formPaymentId,setFormPaymentId] = useState('')
    const[formPayment, setFormPayment] = useState([]);
    const[suplyerName,  setSuplyerName] = useState('');
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

    useEffect(() => {
        api.get(`/suplyer/suplyername?fantasyName=${suplyerName}`,auth).then(
            response => {setSuplyerId(response.data[0].id);
            },token)
        })


    async function handleSaveData(event){
        event.preventDefault();
            const data = {
            issueDate,
            suplyerId,
            document,
            deadline,
            installmentValue,
            installmentNumber,
            formPaymentId,
        }
        try{
            await api.post('/expenses/createexpense',data,auth);
            navigate('/expenses');
        }catch(error){
            alert('Erro ao salvar' + error);
        }
    }   

    return(
        <form id='form' onSubmit={handleSaveData}>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Fornecedor'} innerText={'Informe o fornecedor'}
                        value={suplyerName}
                        onChange={e=>setSuplyerName(e.target.value)}
                    />
                    <TextType type ="datetime-local" name={'Data Emissão'} innerText={'Selecione a data'}
                        value={issueDate}
                        onChange={e=>setIssueDate(e.target.value)}
                    />
                    <TextType  name={'Número Documento'} innerText={'Digite o número do documento'}
                        value={document}
                        onChange={e=>setDocument(e.target.value)}
                    />
                </div>
                <div className="suplyer-form">
                    <TextType type ="datetime-local" name={'Data de Vencimento'} innerText={'Selecione a data'}
                        value={deadline}
                        onChange={e=>setDeadline(e.target.value)}
                    />
                    <TextType name={'Valor Parcela'} innerText={'Digite o valor da parcela'}
                        value={installmentValue}
                        onChange={e=>setInstallmentValue(e.target.value)}
                    />
                    <TextType name={'Nº Parcela'} innerText={'Digite o numero de parcelas'}
                        value={installmentNumber}
                        onChange={e=>setInstallmentNumber(e.target.value)}
                    />
                    <div className='form-payment-select'>
                        <span>Forma de pagamento</span>
                        <select id='formPayment'
                             value={formPaymentId}    
                             onChange={e=> setFormPaymentId(e.target.value)}                   
                        >
                            <option >Selecione forma de pagamento</option>
                                {formPayment.map((formPayment)=>{
                                    const {id, description} = formPayment;
                                    return(
                                        <option value={id} key={formPayment.id}
                                        >{description}</option>
                                    )
                                })}
                        </select>
                    </div>
                </div>
                <div className="suplyer-form-footer">
                    <div></div>
                    <Button type='submit'>
                                <img src={saveIcon} alt="novo cadastro" />
                                <span>Salvar</span>
                    </Button>
                </div>
            </div>
            
        </form>
    )
}