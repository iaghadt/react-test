import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: 'grey', color: 'white', position: 'absolute', bottom: '0', width: '100%', padding: '10px' }}>
      <div style={{ float: 'right' }}>© {currentYear} All Rights Reserved</div>
    </div>
  );
}

export default Footer;
