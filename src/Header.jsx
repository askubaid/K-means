import React from 'react';
import styles from './styles.jsx';


export default function Header() {
  return (
    <nav style={headerStyle}>
      <div style={logoStyle}>K-Means Tool</div>
      <div style={navLinksStyle}>
       
        <a href="#about" style={linkStyle}>About Us</a>
      </div>
    </nav>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 5%',
  backgroundColor: '#1976d2',
  color: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const logoStyle = { fontSize: '1.2rem', fontWeight: 'bold' };
const navLinksStyle = { display: 'flex', gap: '20px' };
const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '0.9rem' };
