import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignUpPage/SignUpPage';
import LoggedInUserPage from './components/AuthorizedWrapper/CustomerWrapper'
import AdminPage from './components/AuthorizedWrapper/AdminPage';

function App() {
  return (
    <AdminPage/>
  );
}

export default App;
