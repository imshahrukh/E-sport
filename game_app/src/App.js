import "./App.css";
import React, { createContext, useState } from "react";

import { SearchPage } from "./pages/Search_Page/search.jsx";
import { ProductDiscription } from "./pages/ProductDiscription/productDiscription.jsx";
import { Login } from "./pages/Login/login.jsx";
import { Registration } from "./pages/Registration/registration.jsx";
import { Dashborad } from "./pages/Dashboard/dashboard.jsx";
import { GamePost } from "./pages/AddGamePost/gamePost.jsx";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const userContext = React.createContext();

function App() {
  const [authUser, setAuthUser] = useState("no user");

  return (
    <userContext.Provider
      value={{ authUser: authUser, setAuthUser: setAuthUser }}
    >
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <SearchPage />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/registration" exact>
              <Registration />
            </Route>
            <Route path="/search" exact>
              <SearchPage />
            </Route>
            <Route path="/admin" exact>
              <Dashborad />
            </Route>
            <Route path="/addPost" exact>
              <GamePost />
            </Route>
            <Route path="/post/:id" exact>
              <ProductDiscription />
            </Route>
            <Route path="/post" exact>
              <ProductDiscription />
            </Route>
          </Switch>
          {/* <Login /> */}
          {/* <Registration /> */}
          {/* <SearchPage /> */}
          {/* <ProductDiscription /> */}
          {/* <Dashborad /> */}
          {/* <GamePost /> */}
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
