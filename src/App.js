

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddService from './AddService/AddService';

import './App.css';
import AuthProvider from './contexts/AuthProvider';
import ManageAllOrders from './ManagageAllOrders/ManageAllOrders';
import MyOrders from './MyOrders/MyOrders';

import NotFound from './NotFound/NotFound';
import AboutUs from './Pages/AboutUs/AboutUs';
import Header from './Pages/Header/Header';
import BookNow from './Pages/HiddenPage/BookNow/BookNow';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Places from './Pages/places/Places';
import Services from './Pages/Services/Services';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/places">
              <Places></Places>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <BookNow></BookNow>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
