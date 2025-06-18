import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalFeedback } from './components/GlobalFeedback';
import Navbar from './components/navbar/Navbar';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CreateStoryPage from './pages/story/CreateStoryPage';
import AuthRouteGuard from './AuthRouteGuard';
import { StoryProvider } from './context/StoryContext';
import StoriesPage from './pages/story/StoriesPage';
import StoryPage from './pages/story/StoryPage';
import BuildStoryPage from './pages/pageStory/BuildStoryPage';
import { PageProvider } from './context/PageContext';
import StoryNodePage from './pages/story/StoryNodePage';
import ReadStoryPage from './pages/pageStory/ReadStoryPage';
import UserStoryPage from './pages/story/UserStoryPage';
import { TagProvider } from './context/TagContext';
import MyWorksPage from './pages/story/MyWorksPages';

function App() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <AuthProvider>
          <StoryProvider >
            <TagProvider >
              <PageProvider >
                <BrowserRouter>
                  <Navbar />
                  <GlobalFeedback />
                  <Routes>
                    <Route path='*' element={<h1>No found</h1>} />
                    <Route path='/' element={<StoriesPage />} />
                    <Route path='/story/:storyId' element={<StoryPage />} />
                    <Route path='/story/:storyId/page/tree' element={<StoryNodePage />} />
                    <Route path='/story/:storyId/page/:pageId' element={<ReadStoryPage />} />

                    <Route path='/user/:userId/story' element={<UserStoryPage />} />

                    <Route element={<AuthRouteGuard requireAuth={false} redirectTo="/" />}>
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<RegisterPage />} />
                    </Route>
                    <Route element={<AuthRouteGuard requireAuth={true} redirectTo="/login" />}>
                      <Route path="/profile" element={<h1>Perfil</h1>} />
                      <Route path='/story/create' element={<CreateStoryPage />} />
                      <Route path='/story/:storyId/page/create' element={<BuildStoryPage />} />
                      <Route path='/story/:storyId/page/:pageId/create' element={<BuildStoryPage />} />
                      <Route path='/myworks' element={<MyWorksPage />} />

                    </Route>
                  </Routes>
                </BrowserRouter>
              </PageProvider>
            </TagProvider>
          </StoryProvider>
        </AuthProvider>
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;
