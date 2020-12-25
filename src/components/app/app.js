import React, { Component } from 'react'
import Header from '../header/header'
import Category from '../category/category'
import Carou from '../carou/carou'
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from '../car/car'
import Footer from '../footer/footer'
import SignIn from '../auth/sign-in/sign-in'
import Register from '../auth/register/register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Service from "../service"
import { remove } from "js-cookie";
import Main from "../main/main"
import ProductDetail from "../server-detail/product-detail"




class App extends Component {

    service = new Service()
    state = {
        user: {}
    }

    componentDidMount() {
        this.login()
    }

    login = () => {
        this.service.getUser().then((data) => {
            this.setState({ user: data })
        }).catch(() => {
            this.logout()
        })
    }

    logout = () => {
        remove("token")
        this.setState({ user: {} })
    }





    render() {
        return (
            <Router>
                <div>
                    <Header user={this.state.user} logout={this.logout} />
                    <Switch>
                        <Route exact path='/'>
                            <Main />
                        </Route>
                        <Route exact path="/SignIn">
                            <SignIn login={this.login} />
                        </Route>
                        <Route exact path="/Register">
                            <Register />
                        </Route>
                        <Route exact path="/product/:title">
                            <ProductDetail/>
                        </Route>
                        <Route exact path="/home">
                            <div className='container'>
                                <div className='row'>
                                    <Category />
                                    <Carou />
                                    <div style={{ marginLeft: "18rem" }} className='row'>
                                        <Car />  <Car /> <Car />
                                        <Car />  <Car /> <Car />
                                    </div>
                                </div>
                            </div>
                        </Route>
                        <Route exact path="/pricing">
                            <Carou />
                        </Route>
                        <Footer />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;