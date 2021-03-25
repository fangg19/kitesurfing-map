import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
