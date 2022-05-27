import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import saveIcon from '../../assets/img/save_icon.svg'
import { Button } from '../ButtonTypes/Button'

export function SuplyerGroupForm(){
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
            await api.post('/suplyergroup/createsuplyergroup',data,auth);
            alert('Registrado com sucesso')
            navigate('/suplyergroups');

        }catch(error){
            alert('Registro falhou' + error)
        }
    }
   
    return(
        <form id='form' onSubmit={handleSaveData}>
            <div className='form-container'>
                <div className="suplyergroup-form">
                    <TextType name={'Nome grupo de fornecedor'} innerText={'Digite o nome do grupo de fornecedor'}
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