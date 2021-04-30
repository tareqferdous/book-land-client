import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import AddProduct from './components/addProduct/AddProduct';
import Manage from './components/Manage/Manage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import CheckOut from './components/CheckOut/CheckOut';
import Shipment from './components/Shipment/Shipment';
import ShowOrder from './components/ShowOrder/ShowOrder';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: ''
  })
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/checkOut/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <PrivateRoute path="/add">
          <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/manage">
          <Manage></Manage>
        </PrivateRoute>
        <Route path="/shipment">
          <Shipment></Shipment>
        </Route>
        <PrivateRoute path="/showOrder">
          <ShowOrder></ShowOrder>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
