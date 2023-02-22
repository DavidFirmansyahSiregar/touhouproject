import React from 'react'
import { useState } from 'react'

export const settimer = () => {
  // const [timer, setTimer] = useState(false)

  const secs =() =>{
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  return (
    <div>settimer</div>
  )
}
