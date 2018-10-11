import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './reduxApp';
import {ProductCart} from './productCart';

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
                    {
                        this.props.productList.map((el,i)=>{
                            return( 
                                <div key={i}>
                                {console.log(this.props)}
                                    < ProductCart id={el.id}/>
                                    <div>Sztuk w koszyku:  {el.ilosc}</div>
                                </div> 

                            )
                        })
                    }
                    
                </div>
        )
    }
    

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
