import { useNavigate } from 'react-router-dom'
import LogoImg from '../assets/img/logo.svg'
import { Button } from '../components/ButtonTypes/Button'
import '../style/login.scss'

export function Login(){

    const navigator = useNavigate();
    async function handleLogin() {
        navigator('/home');
    }

    return(
        <div id="page-login">
            <div className='login-form'>
                <img src={LogoImg} alt="Logo Img" />
                <p>Bem vindo novamente!</p>
                <h2>Entre em sua conta</h2>
                <input type="text"  placeholder='Insira seu usuario ou email'/>
                <input type="text" placeholder='Insira sua senha' />
                <Button 
                type='submit' 
                onClick={handleLogin}
                >Login</Button>
            </div>
        </div>
    )
}