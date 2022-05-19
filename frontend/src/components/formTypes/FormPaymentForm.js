import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import saveIcon from '../../assets/img/save_icon.svg'
import { Button } from '../ButtonTypes/Button'

export function FormPaymentForm(){
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }

    async function handleSaveData(event){
        event.preventDefault();

        const data = {
            description
        };

        try{
            await api.post('/formpayment/createformpayment',data,auth);
            alert('Registrado com sucesso')
            navigate('/formpayments');

        }catch(error){
            alert('Registro falhou' + error)
        }
    }
   
    return(
        <form id='form' onSubmit={handleSaveData}>
            <div className='form-container'>
                <div className="formpayment-form">
                    <TextType name={'Forma de pagamento'} innerText={'Digite a forma de pagamento'}
                            value={description}
                            onChange={e=>setDescription(e.target.value)}
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