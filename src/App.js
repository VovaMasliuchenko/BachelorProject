import { ToastContainer } from 'react-toastify';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage';
import Router from './routes'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router/>
    </div>
  );
}

export default App;
