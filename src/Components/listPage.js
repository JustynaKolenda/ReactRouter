import React, { Component } from 'react';
import '../css/App.css';
import { NavLink } from 'react-router-dom';

export class ListPage extends Component {
    constructor() {
        super();
        /*
        W this.state w constructor definiuje się początkowy stan komponentu.
        Edycja state nie może być w renderze i componentDidUpdate.
        Zmienia sie go za pomocą setState.
        Cykl życia komponentu przy zmianie stata wygląda następująco:
            - zmiana wartości w state komponentu
            - urochomienie render
            - uruchomienie componentDidUpdate
        */
        this.state = {
                    produkts: []
                }
        }

      /*
      Render zawsze musi zwracać "pseudo htmla (jsx).""
      Zawsze musi być zdefiniowany w komponencie.
      */  
    render() {
       // console.log(this.props)
        return(
            /* 
            Poprzez użycie funkcji map nie trzeba sprawdzać czy tablica jest pusta, bo jeżeli jest pusta to się nie wykona
            funkcje map możemy użyć tylko przy tablicy inaczej poda błąd.
            Wszystkie atrybuty w tagu htmlowym to propsy w jsx.
            */
           <span>Lista produktów:
           <br/>
            <ul>{this.state.produkts.map((el,i) => {
                return <li  key={i} >
                         <NavLink to={"/product/"+ el.id}>
                            {el.name}
                            <br/>
                            <b>Cena: {el.price}</b>
                            <br/>
                            {(el.images && el.images.length > 0) &&<img src={el.images[0].src} alt="" className="imgProductList"/>}
                        </NavLink>
                        </li>
            })} </ul>
            </span>
        );
    }
    /*
    Jeżeli jej nie zdefinuije to jest ona zdefiniowana domyślnie w klasie komponent.
    Uruchamia sie gdy komponent został już zamontowany, czyli potym jak construktor tworzy obiekt, render drukuje widok.
    Można go porównać do documentRedy z JQuery.
    */
    componentDidMount() {
        fetch("https://wp-api.kolendateam.pl/wp-json/wc/v2/products/?consumer_key=ck_e0df816b041c946561d4d0ebcdd9d8b1dc3374fe&consumer_secret=cs_496c7c0e476690d33725b29bc559b2dc1c701f66")
        .then(resp => resp.json())
        .then(resp => {
            
            this.setState({
                produkts : resp
            })
        })
    }
}

