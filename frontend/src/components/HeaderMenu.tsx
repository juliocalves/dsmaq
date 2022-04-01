import logo from '../assets/img/logo.svg'
import searching from '../assets/img/searching_icon.svg'
import userIcon from '../assets/img/user_icon.svg'
import notifficationIcon from '../assets/img/notiffication_icon.svg'
import exitIcon from '../assets/img/exit_icon.svg'
import createIcon from '../assets/img/create_icon.svg'
import saveIcon from '../assets/img/save_icon.svg'


import '../style/header-menu.scss'
import { Button } from './ButtonTypes/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import classnames from 'classnames';

type HeaderMenuProps = {
    isHideButtonCreate?:boolean,
    isHideButtonSaveForm?:boolean,
}

export function HeaderMenu({
    isHideButtonCreate=false,
    isHideButtonSaveForm=false,
    }:HeaderMenuProps){
   
    const navigator = useNavigate();
    let location = useLocation().pathname;
    
    function handleCreate() {
        navigator(`${location}/new`);
    }    

    function handleHome(){
        navigator('/home');
    }


    return(     
        <header id='header-menu-content'>
            <div className={classnames(
                    'content-header',
                    {hidebuttoncreate:isHideButtonCreate},
                    {formsave:isHideButtonSaveForm},
                    )}>
                <div className='logo'>
                    <img onClick={handleHome} src={logo} alt="logo dsmaq" className='img-logo'/> 
                </div>
                
                <div className='cad-search'>
                    {!isHideButtonCreate &&
                        <div className='new-cad'>
                            <Button onClick={handleCreate}>
                                <img src={createIcon} alt="New" />
                                <span>Cadastrar</span>
                            </Button>
                        </div>
                    }
                    {!isHideButtonSaveForm &&
                        <div className='new-cad'>
                            <Button >
                                <img src={saveIcon} alt="" />
                                <span>Salvar</span>
                            </Button>
                        </div>
                    }
                    <div className="searching">
                        <img src={searching} alt="icon searchig" />
                        <input type="text" placeholder="Pesquisar" />
                    </div>
                </div>  

                <div className='user'>
                    <span>Olá user</span>
                    <img src={userIcon} alt="user name" />
                </div>
                
                <div className='actions-header-menu'>
                    <button>
                        <img src={notifficationIcon} alt="icon notiffications" />
                    </button>
                    <button>
                        <img src={exitIcon} alt="icon exit" className='icon-exit' />
                    </button>
                </div>
            </div>
        </header>
    )
}
