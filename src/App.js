import { ToastContainer } from 'react-toastify';
import Router from './routes'

function App() {
  return (
    <div className="App">
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false}/>
      <Router/>
    </div>
  );
}

export default App;




