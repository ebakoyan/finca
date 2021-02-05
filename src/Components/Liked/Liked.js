import {Component} from "react"
import Card from '../Card/Card'
export default class Liked extends Component {
    state = {
        likeList: JSON.parse(localStorage.getItem('likeList')) || []
    }
    render(){
        return(
            <div>
                {this.state.likeList.map(item=><Card {...item} key ={item.id}></Card>)}
            </div>
        )
    }
}