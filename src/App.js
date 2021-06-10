import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Todo from './Pages/todo';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/forgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <main>
      <Switch>
        <Route path="/todo" component={Todo} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Login} />
      </Switch>
    </main>
  );
}

export default App;
