import React, { Component } from 'react';
import './App.css';

export class List extends Component {
    constructor() {
        super();

            this.state = {
                    produkts: []
                }
        }

    render() {
        console.log(this.props)
        return(
            <div>{this.state.produkts.map((el,i) => {
                return <div key={i} >
                        {el.name}
                       <b>{el.price}</b>
                       <img src={el.images[0].src} alt=""/>
                        </div>
            })} </div>
        );
    }
    componentDidMount() {
        fetch("https://wp-api.kolendateam.pl/wp-json/wc/v2/products/?consumer_key=ck_e0df816b041c946561d4d0ebcdd9d8b1dc3374fe&consumer_secret=cs_496c7c0e476690d33725b29bc559b2dc1c701f66")
        .then(resp => resp.json())
        .then(resp => {
            console.log("Przykład 2:");
            console.log(resp);
            this.setState({
                produkts : resp
            })
        })
    }
}

