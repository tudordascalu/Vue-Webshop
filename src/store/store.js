import Vue from 'vue'
import Vuex from 'vuex';

import _ from 'lodash';

Vue.use(Vuex);

const state = {
    products: {
        "A": {
          name: "Prd A",
          price: 100
        },
        "B": {
          name: "Prd B",
          price: 200
        },
        "C": {
        name: "Prd B",
        price: 200
        }
    },
    basket: [1]
  };

const mutations = {
    INCREMENT_VALUE(state) {
        state.count++;
    },
    ADD_TO_BASKET(productCode) {
        // is it in basket
        var itemInBasket = _.find(this.state.basket, { code: productCode });
  
        if(itemInBasket === undefined) {
          // if no: add to basket with 1
          this.state.basket.push({
            code: productCode, qty: 1
          });
        } else {
          // if yes: append quantity 
          itemInBasket.qty += 1;
        }
    }
};

var store = new Vuex.Store({
    state,
    mutations
});

export default store;