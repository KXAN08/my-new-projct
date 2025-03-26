import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]); // Har safar sahifa o‘zgarsa tokenni tekshiradi

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-cyan-600  text-white">
      <Link to="/" className="text-2xl font-bold">DevConnector</Link>

      <div className="flex items-center space-x-6">
        {isLoggedIn ? (
          <>
            <Link to="/developers" className="hover:underline">Developers</Link>
            <Link to="/posts" className="hover:underline">Posts</Link>
            <button 
              onClick={handleLogout} 
              className="flex items-center px-4 py-2 rounded "
            >
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVR4nO2XTUhUURTHf31oJbUKQSoQNcQUcREUKK0iiBbu3UgECkIbIZAWCa4CQU2ICQmXLgoXbWpbm6iFtWlyMZnie+e8UWwXRH7UiwtnFokz8968mTGxA3f1OOf+OPfc//0/+B8lRAjHqGSsw2mBboW7CrMK7xQyAhsC2wqhwg+FQOCzwmuBKR/6PegM4XhJG6ehViGlsGmb5Ftbhb4b6J3YAAKjVmBb4IPAU4EhhZ5VaBE4m2v/CpxchwaFNoUbCiMKzxSWrMYvH67GBUi7ZB9uxab/u84j68Zk5KQQjir8FPitUJcQoNcAXkZOCqDRkvwkm1utdquViZwkcN3O7k1SgAycENhxs7QANZGSAhg06lnKEAIrrl4WmiIlKIxZB0bLBHDPzYAHpzw4L7Am8LAQwITdgGHKHA7AtGPTzVo+4hk7ggEqEApPcjPmNGQvgDkD6KsEwAacEVi0Pd57cHE3wAsj7C1WLAsdCt+KyHXBJfC1ZAAfugS+JwTIhnCkakdgL+wn2zwdwOXdHaj0EKas/lsHU9Vr6MMFu4ZbeYVJyyxEzswIzDtZNh0IFMarLsVr0HxgHqNG64AkBQjgktX6sq+GRODVflmyaQOYipv4wBJ3FD6aJXfW/JpAawD1OcvtntlVOOdkOYCbCvcVngss50ypB1diASxAjcLjYrbcAIvZ8tscuB+Tf+bXjMMUfwCVCr0e30lI8AAAAABJRU5ErkJggg==" 
                alt="logout icon" 
                className="w-8 h-8 mr-2"
              />

            </button>


          </>
        ) : (
          <>
            <Link to="/register" className="hover:underline">Register</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
