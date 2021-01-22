export default {
    actions: {

    },
    mutations: {
        generateAllCartsInfo(state, allcartInfos){
            state.cart_info = allcartInfos
        },
        infoAddedToCart(state, cartInfo) {
            const found = state.info_in_cart.filter(data => data.id === cartInfo.id);
            if (found.length <= 0)
            {
              state.info_in_cart.push(cartInfo);
            }
        },
        deleteFromCart(state, id)
        {
            state.info_in_cart = state.info_in_cart.filter(data => data.id !== id);
        },

    },
    state: {
        cart_info: [
        ],
        info_in_cart: [

        ],
    },
    getters: {
        get_cart_info: state => state.cart_info,
        get_info_in_cart: state => state.info_in_cart,
        get_info_in_cart_length: state => state.info_in_cart.length,
    },

}