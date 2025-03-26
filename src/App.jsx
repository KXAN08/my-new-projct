import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Developers from './pages/Developers';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Register from './pages/Register';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function isAuth() {
  return localStorage.getItem("token") !== null;
}

function ProtectedRoute({ children }) {
  return isAuth() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
          />
          <Route path="/developers" element={<Developers />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
