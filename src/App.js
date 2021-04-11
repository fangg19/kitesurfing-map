import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { DataContext } from './contexts/DataContext';
import Login from './containers/LogInOut/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import { useMemo, useState } from 'react';

function App() {
  const [errorMessage, setErrorMessage] = useState(null);

  const [user, setUser] = useState(null);

  const [spots, setSpots] = useState([]);
  const [spotInfo, setSpotInfo] = useState(null);

  const [favs, setFavs] = useState([]);
  const [favInfo, setFavInfo] = useState();

  const [country, setCountry] = useState('');
  const [wind, setWind] = useState('');

  const [filteredSpots, setFilteredSpots] = useState([]);

  const providerValue = useMemo(
    () => ({
      user,
      setUser,
      spots,
      setSpots,
      spotInfo,
      setSpotInfo,
      favs,
      setFavs,
      favInfo,
      setFavInfo,
      country,
      setCountry,
      wind,
      setWind,
      filteredSpots,
      setFilteredSpots,
      errorMessage,
      setErrorMessage,
    }),
    [
      user,
      setUser,
      spots,
      setSpots,
      favs,
      setFavs,
      spotInfo,
      setSpotInfo,
      favInfo,
      country,
      setCountry,
      wind,
      setWind,
      filteredSpots,
      setFilteredSpots,
      errorMessage,
      setErrorMessage,
    ]
  );

  return (
    <Router>
      <DataContext.Provider value={providerValue}>
        <UserContext.Provider value={providerValue}>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </UserContext.Provider>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
