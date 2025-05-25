import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalFeedback } from './components/GlobalFeedback';
import Navbar from './components/navbar/Navbar';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <GlobalFeedback />
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='*' element={<h1>No found</h1>} />

              <Route element={<ProtectedRoute />}>
                <Route path='/profile' element={<h1>Perfil</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;
