import React from 'react';

function Navbar(props) {
  const currentDate = new Date().toDateString();

  return (
    <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <img src={props.logo} alt="Logo" style={{ height: '40px' }} />
      </div>
      <div>{currentDate}</div>
      <div>
        <button style={{ backgroundColor: 'white', color: 'black', border: 'none', padding: '10px 20px' }}>User Profile</button>
      </div>
    </div>
  );
}

export default Navbar;
