function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial'
    }}>
      
      {/* LOGO */}
      <h1 style={{
        fontSize: '4rem',
        margin: 0,
        background: 'linear-gradient(90deg, #ff0000, #000)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        🩸 CVFlash.ci 🕳️
      </h1>

      {/* TA SIGNATURE */}
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        Created by <b>Shanks Vorax</b>
      </p>

      {/* FORMULAIRE */}
      <div style={{
        marginTop: '40px',
        padding: '30px',
        background: '#1a1a1a',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '500px'
      }}>
        <h2>Générer mon CV</h2>
        <input placeholder="Ton Nom" style={{width: '100%', padding: '10px', marginBottom: '10px'}} />
        <input placeholder="Ton Poste" style={{width: '100%', padding: '10px', marginBottom: '10px'}} />
        <button style={{
          width: '100%', 
          padding: '12px', 
          background: 'red', 
          border: 'none', 
          color: 'white', 
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Générer le CV
        </button>
      </div>

    </div>
  )
}

export default App
