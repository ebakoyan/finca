import {Component} from 'react'
import data from '../../api/data/data'
import Card from "../Card/Card"
import Search from '../Search/Search'

import {fetchMusic} from '../../api'
export class Home extends Component {
    state = {
        musicList: data
    }
    change = ({target}) => {
        let list = [];
        let {value} = target;
        value = value.toLowerCase()
        const {musicList}=this.state
        for (let i = 0; i < musicList.length; i++) {
            if (musicList[i].artistName.toLowerCase().includes(value) || musicList[i].trackName.toLowerCase().includes(value)) {
                list.push(musicList[i])
            }
        }
        if (value.length == 0) {
            this.setState({musicList: data})
        } else {
            this.setState({musicList: list})
        }
    }
    render() {
        if (this.state.re) {
            console.log(this.state.musicList)
        }

        return (
            <div>
                <div>
                    <Search change={this.change}/>
                </div>
                <div>
                    {this
                        .state
                        .musicList
                        .map(item =>< Card {
                            ...item
                        }
                        key = {
                            item.id
                        } > </Card>)}
                </div>
            </div>
        )
    }
}