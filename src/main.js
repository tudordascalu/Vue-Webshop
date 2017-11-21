// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash';

import Vuex from 'vuex';

Vue.use(Vuex);

Vue.config.productionTip = false

// window.store = {
//   "A": {
//     name: "Prd A",
//     price: 100
//   },
//   "B": {
//     name: "Prd B",
//     price: 200
//   },
//   "C": {
//     name: "Prd B",
//     price: 200
//   }
// };


// var store = new Vuex.Store({
//   state: {
//     products: window.store,
//     basket: []
//   },
//   mutations: {
    // addToBasket(productCode) {
    //   // is it in basket
    //   var itemInBasket = _.find(basket, { code: productCode });

    //   if(itemInBasket === undefined) {
    //     // if no: add to basket with 1
    //     this.state.basket.push({
    //       code: productCode, qty: 1
    //     });
    //   } else {
    //     // if yes: append quantity 
    //     itemInBasket.qty += 1;
    //   }
    // }
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
