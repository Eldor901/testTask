import Vue from 'vue'
import Vuex from 'vuex'
import cart_info from "@/store/modules/cart_info";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart_info
    }
});

