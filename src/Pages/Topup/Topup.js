import React, { useState} from 'react';


export const Topup = () => {
    const [Nominal, setNominal] = useState("input number");

    const handleChange = (event) => {
        setNominal(event.target.value)
      }
  return (
    <form>
      <select value={Nominal} onChange={handleChange} precision={2}>
        <option value="1k">1000</option>
        <option value="5k">5000</option>
        <option value="10k">10000</option>
        <option value="50k">50000</option>
        <option value="100k">100000</option>
      </select>
    </form>
  )
}
