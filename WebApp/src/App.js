import React, { Component } from "react";
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from "./pages/home"
import Order  from "./pages/order.jsx"
import Employees from "./pages/employees"
import Service from "./pages/service"
import Search from "./pages/search"
import Report from "./pages/report"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/service" component={Service} />
                    <Route path="/search" component={Search} />
                    <Route path="/report" component={Report} />
                    <Route path="/employees" component={Employees} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
export default App;
