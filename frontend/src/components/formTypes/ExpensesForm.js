import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../hooks/useApi';
import './form.scss'
import { TextType } from './inputTypes/TextType'

export function ExpensesForm (){
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const auth = {
        headers :{
            Authorization : `Brearer ${token}`
        }
    }

    
    return(
        <form id='form'>
            <div className='form-container'>
                <div className="suplyer-form">
                    <TextType name={'Valor'} innerText={'Digite valor despesa'}
                      
                    />
                  </div>
            </div>
                <button type='submit'>salvar</button>
        </form>
    )
}