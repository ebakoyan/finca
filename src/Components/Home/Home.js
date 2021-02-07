import {Component} from 'react'
import Card from "../Card/Card"
import Search from '../Search/Search'


import {fetchMusic} from '../../api'

let data=[]

export class Home extends Component {
    state = {
        musicList: [],
        loading:true
    }
    componentDidMount(){
        fetchMusic().then(res=>{
            data=res;
            this.setState({musicList:res},()=>{this.setState({loading:false})})
            
        })
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


        return (
            this.state.loading ? <div>Loading</div>:
            <div>
                <div>
                    <Search change={this.change}/>
                </div>
                <div>





                       {this.state.musicList.map(item=><Card {...item} key = {item.id}> </Card>)} 
                        
                </div>
        </div>
        )
    }
}