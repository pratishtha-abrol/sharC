import React from 'react'
import { useState } from 'react';
import './App.css';

function Time(props) {
  const [des, setDesc] = useState("");

  return (
    <div className='times'>
      <form style={{ marginTop: 15 }}>
        <label>Event description:
          <input
            type="text"
            value={des}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
      </form>
      {/* {`${props.date.toDateString()}`} */}
    </div>
  )
}

export default Time;