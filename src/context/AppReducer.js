
export  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  }

export const initalState = {
    basket: [],
    user: null
};


export default function AppReducer(state = initalState , action) {
 switch (action.type){
    case "SET_USER":
    return { ...state , user: action.user };
    case "ADD_TO_BASKET":
    return { ...state , basket: [...state.basket , action.item] };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };
    default: return state;
}

}
