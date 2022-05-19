
import './questionstypes.scss'

export function PhoneType({
    innerText,
}){
    return(
        <div className="input-type">
            <label>Telefone</label>
            <div>
                <input mask="(99)9999-9999" placeholder={innerText}/>
            </div>
        </div>
    )
}