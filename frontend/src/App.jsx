import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalFeedback } from './components/GlobalFeedback';
import Navbar from './components/navbar/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateStoryPage from './pages/CreateStoryPage';
import AuthRouteGuard from './AuthRouteGuard';
import { StoryProvider } from './context/StoryContext';
import StoriesPage from './pages/StoriesPage';
import StoryPage from './pages/StoryPage';
function App() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <AuthProvider>
          <StoryProvider >
            <BrowserRouter>
              <Navbar />
              <GlobalFeedback />
              <Routes>
                <Route path='*' element={<h1>No found</h1>} />
                <Route path='/' element={<StoriesPage />} />
                <Route path='/:id' element={ <StoryPage /> } />

                <Route element={<AuthRouteGuard requireAuth={false} redirectTo="/" />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<AuthRouteGuard requireAuth={true} redirectTo="/login" />}>
                  <Route path="/profile" element={<h1>Perfil</h1>} />
                  <Route path='/story/create' element={<CreateStoryPage />} />

                </Route>
              </Routes>
            </BrowserRouter>
          </StoryProvider>
        </AuthProvider>
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;
