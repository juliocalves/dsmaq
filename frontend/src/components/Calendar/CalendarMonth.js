import previusIcon from "../../assets/img/previusIcon.svg";
import nextIcon from "../../assets/img/nextIcon.svg";
import './calendar.scss';
import { Calendar,  dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, {useState} from "react";
import DatePicker from "react-datepicker";

const locales = {
    "pt-BR": require('date-fns/locale/pt-BR')
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})


export function CalendarMonth(){

    return(
        <div id="calendar-container">
            <Calendar localizer={localizer} 
                starAccessor='start' 
                endAcessor="end" />
            {/* <div className="calendar-header">
                <div className="calendar-navigate">
                    <button >
                        <img src={previusIcon} alt="previus" />
                    </button>
                    <span>{}</span>
                    <button >
                        <img src={nextIcon} alt='next'/>
                    </button>
                </div>
                <div>
                    <ul className='calendar-select'>
                        <button>Hoje</button>
                        <button>Dia</button>
                        <button>Semana</button>
                        <button>Mês</button>
                    </ul>                                                                                                                           
                </div>
            </div>
            <div id="month-calendar">
                <div id="weekdays">
                    <div>DOMINGO</div>
                    <div>SEGUNDA</div>
                    <div>TERÇA</div>
                    <div>QUARTA</div>
                    <div>QUINTA</div>
                    <div>SEXTA</div>
                    <div>SÁBADO</div>
                </div>
                <div id="calendar">
                </div>
            </div> */}
        </div>
    )
}