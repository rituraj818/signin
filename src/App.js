import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import store from './redux/store'
import { Provider } from 'react-redux';
import Registration from './Components/Registration';
import Profile from './Components/Profile';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Switch>  
       <Route exact path="/"
        component={Login} />
        <Route exact path="/Registration" 
        component={Registration} />
         <Route exact path="/Profile" 
        component={Profile} />
      </Switch>
      {/* <Registration/> */}

    </Provider>
  );
}

export default App;
