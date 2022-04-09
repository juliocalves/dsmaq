
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoImg from '../assets/img/logo.svg'
import { Button } from '../components/ButtonTypes/Button'
import '../style/login.scss'
import api from '../hooks/useApi'

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin(event){
        event.preventDefault();

        const data = {
             email, password
        };

        try{
            const response = await api.post('api/user/loginuser',data);

            localStorage.setItem('email',email);
            localStorage.setItem('password',password);
            localStorage.setItem('token',response.data.token); 
            localStorage.setItem('expiration',response.data.expiration);

            navigate('/home');

        }catch(error){
            alert('Login falhou' + error)
        }
    }

    return(
        <div id="page-login">
            <form className='login-form' onSubmit={handleLogin}>
                <img src={LogoImg} alt="Logo Img" />
                <p>Bem vindo novamente!</p>
                <h2>Entre em sua conta</h2>
                <input type="text"  
                    placeholder='Insira seu email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input type="password" 
                    placeholder='Insira sua senha' 
                    value = {password}
                    onChange={e=>setPassword(e.target.value)}
                />

                <Button type='submit'>Login</Button>
            </form>
        </div>
    )
}