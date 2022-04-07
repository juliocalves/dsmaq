import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";

import { useNavigate } from 'react-router-dom'
import LogoImg from '../assets/img/logo.svg'
import { Button } from '../components/ButtonTypes/Button'
import '../style/login.scss'

export function Login(){
    
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/home');
                alert('ta conectado');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    return(
        <div id="page-login">
            <div className='login-form'>
                <img src={LogoImg} alt="Logo Img" />
                <p>Bem vindo novamente!</p>
                <h2>Entre em sua conta</h2>
                <input type="text"  
                    placeholder='Insira seu email'
                    value={email}
                    onChange={handleEmailInput}
                />
                <input type="password" 
                    placeholder='Insira sua senha' 
                    value = {password}
                    onChange={handlePasswordInput}
                />

                <Button type='submit'  onSubmit={handleLogin}>Login</Button>
            </div>
        </div>
    )
}