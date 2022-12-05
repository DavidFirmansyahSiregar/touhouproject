import React from 'react';
import './home.css';

export const Home = () => {
  return (
    <div>
        <h2>CSS Newsletter</h2>

    <form action="/action_page.php">
      <div className="container">
        <h2>Subscribe to our Newsletter</h2>
        <p></p>
      </div>
      <div className="container">
        <input type="submit" value="Subscribe"></input>
      </div>
     
    </form>
    </div>
  )
}