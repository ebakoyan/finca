import {BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import {Component} from "react"

import {Home} from './Components/Home/Home'
import {Header} from './Components/Header/Header'
import Liked from './Components/Liked/Liked'
import Login from './Components/Login/Login'
import Reg from './Components/Reg/Login'

import {login} from './api'
// import {fetchMusic} from './api'

export default class App extends Component{
    state = {
        auth: JSON.parse(localStorage.getItem('auth')) || false,
    }
    setAuth = async(username, password) => {
        if (await login(username, password)) {
            this.setState({auth: true})
        }
        localStorage.setItem('auth','true')
    }
    logout = ()=>{
      this.setState({auth:false})
      localStorage.removeItem('auth')
    }
    render() {


        return (this.state.auth
            ? <Router>
              <Header logout={this.logout}/>
                    <Switch>
                      <Route path='/' exact>
                        <Home />
                      </Route>
                      <Route path = '/liked'>
                        <Liked/>
                      </Route>
                      <Route>
                        <div>404</div>
                      </Route>
                    </Switch>
                </Router>
            : <Router>
              <Route path= '/' exact>
                <Login setAuth={this.setAuth}></Login>
              </Route>
              <Route path='/reg'>
                <Reg></Reg>
              </Route>
              <Redirect to='/'></Redirect> 

            </Router>);
    }

}

