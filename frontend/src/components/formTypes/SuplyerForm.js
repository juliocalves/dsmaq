import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import { Button } from '../ButtonTypes/Button'
import nextIcon from "../../assets/img/nextIcon.svg";

export function SuplyerForm (){
   
    const [suplyersGroups, setSuplyersGroups] = useState([]);
    const navigate = useNavigate();

    const [corporateName, setCorporateName] =useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [socialRegistration, setSocialRegistration] = useState('');
    const [suplyerGoupId,setSuplyersGroupId] = useState('');

    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }
     
    useEffect(() => {
        api.get('/suplyergroup/suplyersgroups',auth).then(
            response => {setSuplyersGroups(response.data);
            },token)
        })
        
    async function SaveData(event){
        event.preventDefault();
        const data = {
            corporateName,
            fantasyName,
            cnpj,
            socialRegistration,
            suplyerGoupId,
            cadastramentDate: new Date().toISOString(),
            isActive:true,
        }
        try{
            await api.post('/suplyer/createsuplyer',data,auth);
            localStorage.setItem('fantasyName',fantasyName);
            navigate('/suplyer/new/address');
        }catch(error){
            alert('Erro ao salvar ' + error);
        }
    }   
   
    return(
        <form id='form' onSubmit={SaveData}>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Razão Social'} innerText={'Digite a razão social'}
                       value={corporateName}
                       onChange = {e=> setCorporateName(e.target.value)} 
                    />
                    <TextType name={'Nome Fantasia'} innerText={'Digite o nome fantasia'}
                        value={fantasyName}
                        onChange = {e=> setFantasyName(e.target.value)}
                    />
                </div>
                <div className="suplyer-form">
                    <TextType   name={'Cnpj'} innerText={'Digite o CNPJ'}
                        value={cnpj}
                        onChange={e=> setCnpj(e.target.value)}
                    />
                    <TextType name={'Inscrição Estadual'} innerText={'Digite a inscrição Estadual'}
                        value={socialRegistration}
                        onChange={e=> setSocialRegistration(e.target.value)}
                    />
                    <div className='suplyer-group-select'>
                        <span>Grupo Fornecedor</span>
                        <select id='suplyerGroup'
                             value={suplyerGoupId}    
                             onChange={e=> setSuplyersGroupId(e.target.value)}                   
                        >
                            <option >Selecione grupo de fornecedor</option>
                                {suplyersGroups.map((suplyersGroups)=>{
                                    const {id, description} = suplyersGroups;
                                    return(
                                        <option value={id} key={suplyersGroups.id}
                                        >{description}</option>
                                    )
                                })}
                        </select>
                    </div>
                </div>
                <div className="suplyer-form-footer">
                    <div></div>
                    <Button type='submit'>
                            <img src={nextIcon} alt="próximo page cadastro" />
                            <span>Próximo</span>
                    </Button>
                </div>
            </div>
        </form>
    )
}