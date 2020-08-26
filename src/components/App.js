import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contacto" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
