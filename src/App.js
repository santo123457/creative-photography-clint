import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import Order from './Components/Order/Order/Order';
import Review from './Components/Order/Review/Review';
import OrderList from './Components/Order/OrderList/OrderList';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AllServiceList from './Components/Admin/AllServiceList/AllServiceList';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AddServices from './Components/Admin/AddServices/AddServices';
export const UserContext = createContext();
function App() {

  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/home">
            <Home></Home>
        </Route>
        {/*private Route start  */}

        <PrivateRoute path="/order/:name">
           <Order></Order> 
        </PrivateRoute>
        
        <PrivateRoute path="/review/:name">
           <Review></Review> 
        </PrivateRoute>
        <PrivateRoute path="/order-list/:name">
           <OrderList></OrderList> 
        </PrivateRoute>
        {/* private route end */}
       
        <Route path="/login">
           <Login></Login> 
        </Route>
        
         {/*private Route start  */}  
        <PrivateRoute path="/admin-panel/allServices">
          <AllServiceList></AllServiceList>
        </PrivateRoute>
        <PrivateRoute path="/admin-panel/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/admin-panel/addServices">
          <AddServices></AddServices>
        </PrivateRoute>

      {/* private route end */}


        <Route exact path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
