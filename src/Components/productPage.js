import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {mapDispatchToProps, mapStateToProps} from '../Redux/reduxApp';

export class ProductPage extends Component {
    constructor() {
        super();
        this.state = { item : null }        
    }
        
    
    render(){
        return(
            <ul>
                {/*Poniżej użyłam dwie funkcje. Pierszy to if z elsem. Przed ? mamy warunek na true a : to else po, którym mamy warunek na false.
                 Drugi if jest przy sprawdzaniu, czy zdjecie jest true i czy jego wartość jest większa od 0.*/}
                {this.state.item != null ? 
                <div>
                    {this.state.item.name}
                    <br/>
                   <b> {this.state.item.price} </b>
                    <br/>
                    {(this.state.item.images && this.state.item.images.length > 0) && <img src={this.state.item.images[0].src} alt="" />}
                    <br/>
                    <button onClick={()=>{
                        this.props.addProduct(this.state.item.id)
                    }}> Dodaj do koszyka</button> 
                    <br/>
                    <NavLink to={"/product/cart"}> Przejdź do koszyka </NavLink>
                </div>
                :
                <b>Ładowanie</b>
            }
                
            </ul>
        )
    }
    
    componentDidMount() {
        //console.log (this.props)
        /*
        Roting z którego kożystam dodaje do tego komponentu propsa match, ten props match ma w środku parametry, zdefiniowane w rotingu dla tej ścieżki pasującej.
        */
        let numberId = this.props.match.params.element
        fetch("https://wp-api.kolendateam.pl/wp-json/wc/v2/products/"+numberId+"/?consumer_key=ck_e0df816b041c946561d4d0ebcdd9d8b1dc3374fe&consumer_secret=cs_496c7c0e476690d33725b29bc559b2dc1c701f66")
        .then(resp => resp.json())
        .then(resp => {
            
            this.setState({
                item : resp
            })
        })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
