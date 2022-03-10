import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../image/logo.png';

const Login = () => {
  const [username, setUsername] = useState('aimemalaika');
  const [password, setPassword] = useState('aimemalaika');
  const navigate = useNavigate();

  const auth = () => {
    if (username === 'aimemalaika' && password === 'aimemalaika') {
      toast.success('Logged in successfully!', {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => { navigate('/countries'); }, 500);
    } else {
      toast.error('Username or password is incorect!', {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="form-section">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <img src={logo} alt="logo" className="app-logo" />
      <form className="form-login">
        <p className="login-header">Login to access data</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="password" />
        <button onClick={auth} type="button">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
