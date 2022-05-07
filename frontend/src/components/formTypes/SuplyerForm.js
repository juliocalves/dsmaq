import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from './inputTypes/TextType'
import { Button } from '../ButtonTypes/Button'
import saveIcon from '../../assets/img/save_icon.svg'

export function SuplyerForm (){
    const navigate = useNavigate();

    const [corporateName, setCorporateName] =useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [socialRegistration, setSocialRegistration] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [streetNumber,setStreetNumber] = useState('');
    const [district,setDistrict] = useState('');
    const [complement, setComplement] = useState('');
    //adicionar cidade e estado
    const [representativeName, setRepresentativeName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [observe, setObserve] = useState('');
    const [suplyersGroups, setSuplyersGroups] = useState([]);

    const emailUser = localStorage.getItem('email');
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
            cep,
            street,
            streetNumber,
            district,
            complement,
            representativeName,
            phoneNumber,
            email,
            observe,
        }
        try{
            await api.post('/suplyer',data,auth);
            await api.get('/suplyergroup/suplyersgroups',data.suplyerGroup, auth);
            navigate('/suplyer');
        }catch(error){
            alert('Erro ao salvar' + error);
        }
    }   


    /// função para validação de cnpj com java script
    // function ValidateCnpj(event){
    //     event.preventDefault();

    //     input = document.getElementsByName('CNPJ')
    //     let pj = input.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,4})(\d={0,2})/);
    //     input.target.value = !pj[2] ? pj[1] :pj[1] + '.' + pj[2] + '.' + pj[3] + '/' + pj[4] + (pj[5] ? '-' + pj[5] : '');
            
            
    //         console.log(pj)
    // }

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
                    <TextType name={'CNPJ'} innerText={'Digite o CNPJ'}
                        value={cnpj}
                        onChange={e=> setCnpj(e.target.value)}
                    />
                    <TextType name={'Inscrição Social'} innerText={'Digite a inscrição social'}
                        value={socialRegistration}
                        onChange={e=> setSocialRegistration(e.target.value)}
                    />
                    <div className='suplyer-group-select'>
                        <span>Grupo Fornecedor</span>
                        <select >
                        <option value=''>Selecione grupo de fornecedor</option>
                            {suplyersGroups.map((suplyersGroups)=>{
                                const {id, description} = suplyersGroups;
                                return(
                                    <option value={id} key={suplyersGroups.id}>{description}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'CEP'} innerText={'Digite o CEP'}
                        value={cep}
                        onChange={e=> setCep(e.target.value)}
                    />
                    <TextType name={'Endereço'} innerText={'Digite a rua'}
                        value={street}
                        onChange={e=>setStreet (e.target.value)}
                    />
                </div>
                <div className="suplyer-form">
                    <TextType name={'Número'} innerText={'Digite o número'}
                        value={streetNumber}
                        onChange={e=> setStreetNumber(e.target.value)}
                    />
                    <TextType name={'Bairro'} innerText={'Digite o bairro'}
                        value={district}
                        onChange={e=> setDistrict(e.target.value)}
                    />
                    <TextType name={'Complemento'} innerText={'Digite o complemento'}
                        value={complement}
                        onChange={e=> setComplement(e.target.value)}
                    />
                </div>  
            </div>
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
                    <TextType name={'Fones'} innerText={'Digite o telefene'}
                        value={phoneNumber}
                        onChange={e=> setPhoneNumber(e.target.value)}
                    />
                    <TextType name={'Observações'} innerText={'Digite observações relevantes'}
                        value={observe}
                        onChange={e=> setObserve(e.target.value)}
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