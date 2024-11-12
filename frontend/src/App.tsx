import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { UserProvider } from './Context/useAuth';
import Button from './Components/EmergencyButton/Button';

function App() {
	const handleEmergencyClick = () => {
	  alert('Emergency services have been contacted.');
	  // maybe send out some type of text message and/or call emergency services once clicked
  	};

	return (
		<UserProvider>
			<NavBar />
			<Outlet />
			<Button onClick={handleEmergencyClick}>EMERGENCY!</Button>
		</UserProvider>
	);
	}

export default App;
