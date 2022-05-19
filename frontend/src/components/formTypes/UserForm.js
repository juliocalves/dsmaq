import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from '../InputTypes/TextType'
import saveIcon from '../../assets/img/save_icon.svg'
import { Button } from '../ButtonTypes/Button'



export function UserForm (){
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleRegisterUser(event){
        event.preventDefault();

        const data = {
            userName, email, password, confirmPassword
        };

        try{
            await api.post('/user/creatuser',data);
            alert('Registrado com sucesso')
            navigate('/suplyer');

        }catch(error){
            alert('Registro falhou' + error)
        }
    }

    
    return(
        <form id='form' onSubmit={handleRegisterUser}>
            <div className='user-form-container'>
                <div className="user-form">
                    <TextType name={'Nome Usuario'} innerText={'Digite o nome do novo usuario'}
                       value={userName}
                       onChange={e=>setUserName(e.target.value)}   
                    />
                     <TextType name={'Email'} innerText={'Digite o email do novo usuario'}
                       value={email}
                       onChange={e=>setEmail(e.target.value)}   
                    />
                </div>
                <div className="user-form">
                    <TextType name={'Senha'} innerText={'Digite a senha do usuario'}
                            type="password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            />
                    <TextType name={'Confirme a Senha'} innerText={'Confirme a senha do usuario'}
                            type="password"
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
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