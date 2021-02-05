import {Component} from 'react'
import s from './Card.module.css'
class Card extends Component {
    handleLike = () => {
        let likeList = JSON.parse(localStorage.getItem('likeList')) || [];
        let t = true
        for (let i = 0; i < likeList.length; i++) {
            if (likeList[i].id == this.props.id){
	    	t = false;
            	i = likeList.length;
             } 
                
        }
        if (t) {
            likeList.push(this.props)
            localStorage.setItem('likeList',JSON.stringify(likeList))

        }
    }
    render() {
        return (
            <div className={s.container}>
                <div className={s.about}>
                    <button
                        onClick={this.handleLike}
                        style={{
                        marginBottom: "10px"
                    }}
                        className='btn btn-success'>Like</button>
                    <div>
                        <img src={this.props.img} alt={this.props.artistName}/>
                    </div>
                </div>
                <div>
                    <h2>{this.props.artistName}</h2>
                    <h3>{this.props.trackName}</h3>
                </div>
                <div className={s.audio}>
                    <audio controls src={this.props.track}>
                        Your browser does not support the
                        <code>audio</code>
                        element.
                    </audio>
                </div>
            </div>
        )
    }

}
export default Card