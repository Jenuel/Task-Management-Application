import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  const handleLoggingIn = () => {
    setAuthenticated(true)
  }

  return (
    <div className="App">
      {!authenticated ? (
        <LoginPage login={handleLoggingIn}/>
      ) : (

      )}
    </div>
  );
}

export default App;
