import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />

            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
