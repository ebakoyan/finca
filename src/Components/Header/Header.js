import {Component} from "react"
import {NavLink} from 'react-router-dom'

import s from './Header.module.css'

export  class Header extends Component {
    render(){
        return (
            <div className={s.container}>
                <div className={s.logo}>
                    <img src="https://1.bp.blogspot.com/-lKEigWDX38Y/XXiRiTch0ZI/AAAAAAAAAJw/EIv0hL9-dY05Xza-0VT9xWgB9PiyAdRugCLcBGAsYHQ/s1600/logo%2B129.png" alt="logo"/>
                </div>
                <div className={s.nav}>
                    <NavLink className ="btn btn-primary" to="/">Home</NavLink>
                    <NavLink className= "btn btn-dark" to="liked">Liked</NavLink>
                    <button  onClick={this.props.logout} className= "btn btn-danger" to="liked">Logout</button>
                </div>
            </div>
        )
    }
}