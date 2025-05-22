import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/register/RegisterPage';
import { AuthProvider } from './context/AuthContext';

import LoginPage from './pages/login/LoginPage';
function App() {

  return (
    <>
      <AuthProvider >
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<h1>No found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
