import './form.scss'
import { TextType } from './QuestionTypes/TextType'

export function ExpensesForm (){
    return(
        <form id='form'>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Fornecedor'} innerText={'Informe o fornecedor'}/>
                    <TextType name={'Data Emissão'} innerText={'Selecione a data'}/>
                </div>
                <div className="suplyer-form">
                    <TextType name={'Data de Vencimento'} innerText={'Selecione a data'}/>
                    <TextType name={'Valor Parcela'} innerText={'Digite o valor da parcela'}/>
                    <TextType name={'Nº Parcela'} innerText={''}/>
                </div>
            </div>
            
        </form>
    )
}