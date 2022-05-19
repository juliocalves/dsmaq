import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import { Button } from '../ButtonTypes/Button'
import saveIcon from '../../assets/img/save_icon.svg'
import previusIcon from "../../assets/img/previusIcon.svg";
const suplyerName = localStorage.getItem('fantasyName');

export function SuplyerContactForm (){
    const navigate = useNavigate();
    const [representativeName, setRepresentativeName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [observe, setObserve] = useState('');
    const [suplyerId,setSuplyerId] = useState('');

    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get(`/suplyer/suplyername?fantasyName=${suplyerName}`,auth).then(
            response => {setSuplyerId(response.data[0].id);
            },token)
        })

    async function SaveData(event){
        event.preventDefault();

        const data = {
            phoneNumber,
            suplyerId,
            email,
            representativeName,
            observe,
        }

        try{
            await api.post('/contact/createsuplyercontact',data,auth);
            navigate('/suplyer');
        }catch(error){
            alert('Erro ao salvar' + error);
        }
    }   
    
    function handleRetunForm(){
        navigate('/suplyer/new/address')
    }
    return(
        <form id='form' onSubmit={SaveData}>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Contato'} innerText={'Digite o nome do contato'}
                        value={representativeName}
                        onChange={e=> setRepresentativeName(e.target.value)}
                    />
                    <TextType name={'Email'} innerText={'Digite um email'}
                        value={email}
                        onChange={e=> setEmail (e.target.value)}
                    />
                </div>
                <div className="suplyer-form">
                    <TextType name={'Telefone'}  innerText={'Digite o telefene'}
                        value={phoneNumber}
                        onChange={e=> setPhoneNumber(e.target.value)}
                    />
                    <TextType name={'Observações'} innerText={'Digite observações relevantes'}
                        value={observe}
                        onChange={e=> setObserve(e.target.value)}
                    />
                </div>
                <div className="suplyer-form-footer">
                    <Button onClick={handleRetunForm}>
                            <img src={previusIcon} alt="page anterior cadastro" />
                            <span>Anterior</span>
                    </Button>
                    <Button type='submit'>
                                <img src={saveIcon} alt="novo cadastro" />
                                <span>Salvar</span>
                    </Button>
                </div>
            </div>
        </form>
    )
}