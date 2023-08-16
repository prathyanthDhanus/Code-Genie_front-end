import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={containerStyle}>
        <p style={textStyle}>
          &copy; {new Date().getFullYear()} Your Project Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};



const containerStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '5rem',
};

const textStyle = {
  textAlign: 'center',
  fontSize: '14px',
};

export default Footer;
