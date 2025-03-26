import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { lang, setLang, data } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Parollar mos kelmadi');
      return;
    }

    try {
      const res = await fetch('https://nt-devconnector.onrender.com/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await res.json();

      if (res.ok) {
        localStorage.setItem('token', result.token);
        alert('Ro‘yxatdan o‘tish muvaffaqiyatli!');
        navigate('/developers'); // Registratsiya bo‘lsa developersga o‘tadi
      } else {
        alert(result.msg || 'Xatolik yuz berdi');
      }
    } catch (err) {
      console.error(err);
      alert('Server bilan ulanishda xatolik');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-5xl font-bold text-cyan-600 mb-4">
        {lang === 'uz' ? 'Ro‘yxatdan o‘tish' : lang === 'ru' ? 'Регистрация' : 'Sign Up'}
      </h1>
      <p className="text-lg mb-6">
        {lang === 'uz' ? 'Hisob yarating' : lang === 'ru' ? 'Создайте аккаунт' : 'Create Your Account'}
      </p>

      <form onSubmit={handleRegister} className="w-80">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 w-full mb-4 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full mb-4 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full mb-4 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-3 w-full mb-4 rounded text-black"
          required
        />
        <button type="submit" className="bg-cyan-600 text-white py-3 w-full rounded hover:bg-cyan-700">
          Register
        </button>
      </form>

      <div className="mt-6">
        <button onClick={() => setLang('uz')} className="bg-gray-300 px-4 py-2 rounded mx-1">UZ</button>
        <button onClick={() => setLang('ru')} className="bg-gray-300 px-4 py-2 rounded mx-1">RU</button>
        <button onClick={() => setLang('en')} className="bg-gray-300 px-4 py-2 rounded mx-1">EN</button>
      </div>

      <p className="mt-6 text-center">
        {lang === 'uz' ? 'Hisobingiz bormi?' : lang === 'ru' ? 'Уже есть аккаунт?' : "Already have an account?"}{" "}
        <Link to="/login" className="text-cyan-600 hover:underline">
          {lang === 'uz' ? 'Kirish' : lang === 'ru' ? 'Войти' : 'Login'}
        </Link>
      </p>
    </div>
  );
};

export default Register;
