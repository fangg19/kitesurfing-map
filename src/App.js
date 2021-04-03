import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { DataContext } from './contexts/DataContext';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import { useMemo, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const [spots, setSpots] = useState([]);
  const [spotInfo, setSpotInfo] = useState(null);

  const [favs, setFavs] = useState([]);
  const [favInfo, setFavInfo] = useState({});

  const [isOnFav, setIsOnFav] = useState(false);
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
      isOnFav,
      setIsOnFav,
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
      isOnFav,
      setIsOnFav,
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
