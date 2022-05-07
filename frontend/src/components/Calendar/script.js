let navigator = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')):[];


const calendarmonth = document.getElementById('calendar');
const weekdays = ['Domingo', 'Segunda', 'Terça','Quarta', 'Quinta', 'Sexta', 'Sábado'];

function loadingCalendar(){
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    const firstDayInMonth = new Date(year, month,1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateInString = firstDayInMonth.toLocaleDateString('pt-br',{
        weekday:'long',
        day:'numeric',
        year:'numeric',
        month:'numeric',
    });
    const fullDays = weekdays.indexOf(dateInString.split(', ')[0]);
    for (let index = 0; index <= fullDays + daysInMonth; index++){
         const dayElement = document.createElement('div');
         dayElement.classList.add('days');

         if(index >fullDays){
            dayElement.innerHTML = index - fullDays;

            // dayElement.addEventListener('click',()=> console.log('click'));
         }else{
            dayElement.classList.add('padding')
         }

         calendarmonth.appendChild(dayElement);
    }
}

loadingCalendar();