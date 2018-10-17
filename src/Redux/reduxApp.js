

export const mapStateToProps = (state) => {
    return { productList: state.productList };
  };
export const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (id) => dispatch({ type: 'ADD_PRODUCT', productId: id }),
      removeProduct: (id) => dispatch({ type: 'REMOVE_PRODUCT', productId: id})
    }
  };

  export  const reducer = (state, action) => {
        const idProduktu = action.productId;
        let cart = state.productList;
        const indexElementu = cart.findIndex((element) => {
            return element.id === idProduktu;
        });
    //Dodawanie produktów do koszyka, sprawdzając id każdego elemetu i grupowanie ich
    switch (action.type) {
      case 'ADD_PRODUCT':
          
          if(indexElementu === -1){
            cart.push({
              id:idProduktu,
              amount:1
            });
          } else {
            cart[indexElementu].amount++;
          }
            cart = cart.slice(0);
            return { ...state, productList: cart };
      case 'REMOVE_PRODUCT':
        
        if(indexElementu !== -1){
          if(cart[indexElementu].amount === 1){
            cart.splice(indexElementu, 1)
          }
          else{
            cart[indexElementu].amount--;
          };
          cart = cart.slice(0);
        }
        return { ...state, productList: cart };
      default:
        return state;
      }
  };
