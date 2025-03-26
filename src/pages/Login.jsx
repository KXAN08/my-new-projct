import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { lang, setLang, data } = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://nt-devconnector.onrender.com/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        alert('Login muvaffaqiyatli!');
        navigate('/developers'); // Login muvaffaqiyatli bo‘lsa developersga o‘tadi
      } else {
        alert(result.msg || 'Xatolik yuz berdi');
      }
    } catch (error) {
      console.error(error);
      alert('Server bilan ulanishda xatolik');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-5xl font-bold text-cyan-600 mb-4">{data[lang].signIn}</h1>
      <p className="text-lg mb-6">{data[lang].subTitle}</p>

      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-80 mb-4 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-80 mb-4 rounded text-black"
          required
        />
        <button type="submit" className="bg-cyan-600 text-white py-3 w-80 rounded hover:bg-cyan-700">
          Login
        </button>
      </form>

      <div className="mt-6">
        <button onClick={() => setLang('uz')} className="bg-gray-300 px-4 py-2 rounded mx-1">UZ</button>
        <button onClick={() => setLang('ru')} className="bg-gray-300 px-4 py-2 rounded mx-1">RU</button>
        <button onClick={() => setLang('en')} className="bg-gray-300 px-4 py-2 rounded mx-1">EN</button>
      </div>

      <p className="mt-6 text-center">
        {lang === 'uz' ? "Hisobingiz yo'qmi?" : lang === 'ru' ? 'Нет аккаунта?' : "Don't have an account?"}{" "}
        <Link to="/register" className="text-cyan-600 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
