import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import { Button } from '../ButtonTypes/Button'
import nextIcon from "../../assets/img/nextIcon.svg";
import previusIcon from "../../assets/img/previusIcon.svg";

export function SuplyerAddressForm (){
    const navigate = useNavigate();
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [streetNumber,setStreetNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [district,setDistrict] = useState('');
    const [complement, setComplement] = useState('');
    const [suplyerId,setSuplyerId] = useState('');
    const token = localStorage.getItem('token');
    const suplyerName = localStorage.getItem('fantasyName');

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
            
            cep,
            street,
            city,
            state,
            district,
            streetNumber,
            complement,
            suplyerId,
            
        }
        try{
            await api.post('/address/createsuplyeraddress',data,auth);
            navigate('/suplyer/new/contact');
            console.log(data.suplyerId)
        }catch(error){
            alert('Erro ao salvar' + error);
        }
    }   

    function handleRetunForm(){
        navigate('/suplyer/new')
    }
   
    return(
        <form id='form' onSubmit={SaveData}>
            
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType  name={'Cep'} innerText={'Digite o CEP'}
                        value={cep}
                        onChange={e=> setCep(e.target.value)}
                    />
                    <TextType name={'Rua'} innerText={'Digite a rua'}
                        value={street}
                        onChange={e=>setStreet (e.target.value)}
                    />
                    <TextType name={'Número'} innerText={'Digite o número'}
                        value={streetNumber}
                        onChange={e=> setStreetNumber(e.target.value)}
                    />
                </div>
                <div className="suplyer-form">
                    <TextType name={'Bairro'} innerText={'Digite o bairro'}
                        value={district}
                        onChange={e=> setDistrict(e.target.value)}
                    />
                    <TextType name={'Cidade'} innerText={'Digite a cidade'}
                        value={city}
                        onChange={e=> setCity(e.target.value)}
                    />
                    <TextType name={'UF'} innerText={'Digite o bairro'}
                        value={state}
                        onChange={e=> setState(e.target.value)}
                    />
                    <TextType name={'Complemento'} innerText={'Digite o complemento'}
                        value={complement}
                        onChange={e=> setComplement(e.target.value)}
                    />
                </div>  
                <div className="suplyer-form-footer">
                    <Button onClick={handleRetunForm}>
                            <img src={previusIcon} alt="page anterior cadastro" />
                            <span>Anterior</span>
                    </Button>
                    <Button type='submit'>
                            <img src={nextIcon} alt="próximo page cadastro" />
                            <span>Próximo</span>
                    </Button>
                </div>
            </div>
        </form>
    )
}