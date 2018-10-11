import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './reduxApp';

export class ProductCart extends Component {
    constructor() {
        super();
        this.state = {}        
    }
        
    
    render(){
        return(
            <ul>
                {this.state.item != null ? 
                <div>
                    {this.state.item.name}
                    <br/>
                   <b> {this.state.item.price} </b>
                    <br/>
                    {(this.state.item.images && this.state.item.images.length > 0) && <img src={this.state.item.images[0].src} alt="" />}
                    <br/>
                </div>
                :
                <b>Ładowanie</b>
            }
                
            </ul>
        )
    }
    
    componentDidMount() {
        let numberId = this.props.id
        fetch("https://wp-api.kolendateam.pl/wp-json/wc/v2/products/"+numberId+"/?consumer_key=ck_e0df816b041c946561d4d0ebcdd9d8b1dc3374fe&consumer_secret=cs_496c7c0e476690d33725b29bc559b2dc1c701f66")
        .then(resp => resp.json())
        .then(resp => {
            
            this.setState({
                item : resp
            })
        })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
