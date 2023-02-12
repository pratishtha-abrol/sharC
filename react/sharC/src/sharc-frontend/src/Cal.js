import { useState } from 'react';
import Calendar from 'react-calendar';
import './Cal.css';
import Time from './Time.js'


function Cal() {
    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)
    return (
        <div className='app'>
            <h1 className='header'>React Calendar</h1>
            <div>
                <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
            </div>
            {
                // <p>
                //     <span>Default selected date:</span>{date.toDateString()}
                // </p>
            }
            <Time date={date} />

        </div>
    )
}

export default Cal;