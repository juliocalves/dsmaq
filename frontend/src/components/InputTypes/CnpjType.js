import './questionstypes.scss'
import {cnpjMask} from './maskcnpj'
export function CnpjType({
    innerText,
}){
    const [values, setValues] = useState({ cnpj: '' })
  
    const inputChange = (e) => {
        const { name, value } = e.target
        setValues({
        ...values,
        [name]: value
        })
    }
    return(
        <div className="input-type">
            <label>Cep</label>
            <div>
                <input 
                name='cnpj'
                placeholder={innerText}/>
                value={cnpjMask(values.cnpj)}
                onChange={inputChange}
            </div>
        </div>
    )
}