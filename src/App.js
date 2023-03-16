import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import LogIn from './components/login';
import LogOut from './components/logout';
import deadline from './components/deadline';
function App() {
  return (
    <div>
    <LogIn></LogIn>
    <Register></Register>
    <LogOut></LogOut>
    <deadline></deadline>
    </div>
  );
}

export default App;
