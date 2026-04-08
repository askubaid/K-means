  
import react from 'react';
import styles from './styles.jsx';

    
const Spinner =()=>{
  
  return (
         <> 
        <div style={styles.loaderOverlayStyle}>
          <div className="spinner" ></div>
          <p style={{ color: 'white', marginTop: '15px', fontWeight: 'bold' }}>Processing...</p>
        </div>

        <style> {`.spinner { border: 5px solid rgba(255, 255, 255, 0.2); border-top: 5px solid #fff; border-radius: 50%; width: 50px; height: 50px; animation: spin 0.8s linear infinite; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                `} 
        </style>    
           
        </>
           
    )
      
    }
  

export default Spinner;

  




  
  
  
    