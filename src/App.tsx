import { useState } from 'react'
import { Login } from './pages/loginPage'
import { GlobalStyles } from './styles/GlobalStyles'
import { Register } from './pages/registerPage'

function App() {
  const [goToRegister, setGoToRegister] = useState(false)

  const handleGoToRegister = () => {
    setGoToRegister(true)
  }

  return (
    <>
      <GlobalStyles />
      {goToRegister ? (<Register navigateTo={() => setGoToRegister(false)} />) : (
        <Login navigateTo={handleGoToRegister} />
      )}
    </>
  );
}

export default App

