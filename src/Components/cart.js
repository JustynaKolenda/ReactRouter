import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../Redux/reduxApp';
import {ProductCart} from './productCart';
import { NavLink } from 'react-router-dom';

class Cart extends Component {
    constructor() {
        super();  
        this.state = { }     
    }
        /*
        musze utworzyć komponent produktu (w nowym pliku) , jako props musi przyjmować id produktu, który musi wydrukować
        na podstawie tego id strzeli sobie do api po produkt i wyświetli go  
        w produkt dodać usuń z koszyka, do usuwania jest funkcja która ma funkcje indexof
         */
    
    render(){
        return(
                <div>
                    <NavLink to={""}> Powrót </NavLink>
                    {
                        this.props.productList.map((el,i)=>{
                            return( 
                                <div key={i}>
                                    < ProductCart id={el.id}/>
                                    <div>Sztuk w koszyku:  {el.amount}</div>
                                    <button onClick={()=>{
                                        this.props.removeProduct(el.id)
                                    }}> Usuń z koszyka
                                    </button> 
                                </div> 

                            )
                        })
                    }
                    
                </div>
        )
    }
    

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
