

const  styles = {

controlsContainer: { background: 'white', display: 'inline-flex', alignItems: 'center', gap: '20px', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '40px' },
inputStyle: { width: '60px', padding: '8px', borderRadius: '6px', border: '1px solid #ddd' },
primaryBtnStyle: { backgroundColor: '#1976d2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
cardStyle: { background: 'white', padding: '15px', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 3px 8px rgba(0,0,0,0.1)', width: '210px' },
iconBtnStyle : { background: '#f5f5f5', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', color: '#1976d2' },
mainCard : { background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
cardTitle : { margin: '0 0 15px 0', color: '#666', fontSize: '0.8em', textTransform: 'uppercase' },
modalOverlayStyle : { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3000 },
loaderOverlayStyle : {position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3000, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 4000 },
modalContentStyle : { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
modalDownloadBtnStyle : { marginTop: '20px', backgroundColor: '#1976d2', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
saveAllBtnStyle : { marginTop: '40px', backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' },
summaryBadgeStyle : {
  backgroundColor: '#e3f2fd',
  color: '#1976d2',
  padding: '8px 20px',
  borderRadius: '30px',
  fontSize: '0.95em',
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
},

labelStyle : {
  color: '#666',
  fontWeight: 'normal',
  fontSize: '0.9em'
}



}

export default styles