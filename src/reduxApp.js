

export const mapStateToProps = (state) => {
    return { productList: state.productList };
  };
export const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (id) => dispatch({ type: 'ADD_PRODUCT', productId: id }),
      romoveProduct: (id) => dispatch({ type: 'REMOVE_PRODUCT', productId: id})
    }
  };

  export  const reducer = (state, action) => {
    const productList = state.productList;
    
    //Dodawanie produktów do koszyka, sprawdzając id każdego elemetu i grupowanie ich
    switch (action.type) {
      case 'ADD_PRODUCT':
        const idProduktu = action.productId;
        const koszyk = state.productList;
        const indexElementu = koszyk.findIndex((element) => {
            return element.id === idProduktu;
        });
          
          if(indexElementu === -1){
            koszyk.push({
              id:idProduktu,
              ilosc:1
            });
          } else {
            koszyk[indexElementu].ilosc++;
          }
            return { ...state, productList: koszyk };
      case 'REMOVE_PRODUCT':
        return { ...state, productList: productList };
      default:
        return state;
      }
  };
