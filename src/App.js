
import './App.css';
import NavBar from './compoments/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './compoments/Footer/Footer';
import Home from './compoments/Home/Home';


import Explore from './compoments/Explore/Explore';



import Login from './compoments/Login/Login/Login';
import Register from './compoments/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './compoments/Login/PrivateRoute/PrivateRoute';
import AdminDashboard from './compoments/AdminDashboard/AdminDashboard';
import Review from './compoments/Review/Review';
import Pay from './compoments/Pay/Pay';
import ManageAllOrders from './compoments/ManageAllOrders/ManageAllOrders';
import AddAProduct from './compoments/AddAProduct/AddAProduct';
import MakeAdmin from './compoments/MakeAdmin/MakeAdmin';
import ManageProducts from './compoments/ManageProducts/ManageProducts';
import Booking from './compoments/Booking/Booking';
import NotFound from './compoments/NotFound/NotFound';



function App() {
  return (
    <div className="">

      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <NavBar></NavBar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <NavBar></NavBar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/explore">
              <NavBar></NavBar>
              <Explore></Explore>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <NavBar></NavBar>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <NavBar></NavBar>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <NavBar></NavBar>
              <Booking></Booking>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <NavBar></NavBar>
              <AdminDashboard></AdminDashboard>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/review">
              <NavBar></NavBar>
              <Review></Review>
              <Footer></Footer>
            </Route>
            <Route path="/pay">
              <NavBar></NavBar>
              <Pay></Pay>
              <Footer></Footer>
            </Route>
            <Route path="/ManageAllOrders">
              <NavBar></NavBar>
              <ManageAllOrders></ManageAllOrders>
              <Footer></Footer>
            </Route>
            <Route path="/AddAProduct">
              <NavBar></NavBar>
              <AddAProduct></AddAProduct>
              <Footer></Footer>
            </Route>
            <Route path="/MakeAdmin">
              <NavBar></NavBar>
              <MakeAdmin></MakeAdmin>
              <Footer></Footer>
            </Route>
            <Route path="/ManageProducts">
              <NavBar></NavBar>
              <ManageProducts></ManageProducts>
              <Footer></Footer>
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
