import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import saveIcon from '../../assets/img/save_icon.svg'
import { Button } from '../ButtonTypes/Button'

export function PaymentForm(){
    const navigate = useNavigate();
    const [expense, setExpense] = useState([]);
    const [expenseId, setExpenseId] = useState('');
    const [payDate, setPayDate] = useState('');
    const [discountValue, setDiscountValue] = useState('');
    const [expenseValue, setExpenseValue] = useState('');
    const [interestValue, setInterestValue] = useState('');
    const [amountPaid, setAmountPaid] = useState('');


    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }
    useEffect(() => {
        api.get('/expenses/getexpenses',auth).then(
            response => {setExpense(response.data);
            },token)
        })
    async function handleSaveData(event){
        event.preventDefault();

        const data = {
            description
        };

        try{
            await api.post('/formpaymente/createformpayment',data,auth);
            alert('Registrado com sucesso')
            navigate('/formpayment');

        }catch(error){
            alert('Registro falhou' + error)
        }
    }
   
    return(
        <form id='form' onSubmit={handleSaveData}>
            <div className='form-container'>
                <div className="formpayment-form">
                    <div className='form-payment-select'>
                        <span>Despesa</span>
                        <select id='expense'
                             value={expenseId}    
                             onChange={e=> setExpenseId(e.target.value)}                   
                        >
                            <option >Selecione a despesa</option>
                                {expense.map((expense)=>{
                                    const {id,installmentValue,document} = expense;
                                    return(
                                        <option value={id} key={expense.id}
                                        >{document}</option>
                                    )
                                })}
                        </select>
                    </div>
                    <TextType  name={'Valor desconto'} innerText={'Digite o valor de desconto'}
                        value={discountValue}
                        onChange={e=>setDiscountValue(e.target.value)}
                    />
                    <TextType  name={'Juros'} innerText={'Digite o numero percentual de juros'}
                        value={interestValue}
                        onChange={e=>setInterestValue(e.target.value)}
                    />
                   
                </div>
                <div className="formpayment-form">
                    <TextType type ="datetime-local" name={'Data de Pagamento'} innerText={'Selecione a data'}
                        value={payDate}
                        onChange={e=>setPayDate(e.target.value)}
                    />
                    <div className="form-save">
                        <Button type='submit'>
                                    <img src={saveIcon} alt="novo cadastro" />
                                    <span>Salvar</span>
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}