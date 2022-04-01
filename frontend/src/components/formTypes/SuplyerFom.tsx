import './form.scss'
import { TextType } from './QuestionTypes/TextType'

export function SuplyerForm (){
    return(
        <form id='form'>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Razão Social'} innerText={'Digite a razão social'}/>
                    <TextType name={'Nome Fantasia'} innerText={'Digite o nome fantasia'}/>
                </div>
                <div className="suplyer-form">
                    <TextType name={'CNPJ'} innerText={'Digite o CNPJ'}/>
                    <TextType name={'Inscrição Social'} innerText={'Digite a inscrição social'}/>
                </div>
            </div>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'CEP'} innerText={'Digite o CEP'}/>
                    <TextType name={'Endereço'} innerText={'Digite a rua'}/>
                </div>
                <div className="suplyer-form">
                    <TextType name={'Número'} innerText={'Digite o número'}/>
                    <TextType name={'Bairro'} innerText={'Digite o bairro'}/>
                    <TextType name={'Complemento'} innerText={'Digite o complemento'}/>
                </div>  
            </div>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Contato'} innerText={'Digite o nome do contato'}/>
                    <TextType name={'Email'} innerText={'Digite um email'}/>
                </div>
                <div className="suplyer-form">
                    <TextType name={'Fones'} innerText={'Digite o telefene'}/>
                    <TextType name={'Observações'} innerText={'Digite observações relevantes'}/>
                </div>
            </div>
        </form>
    )
}