<template>
<div class="content-product cart">
    <section id="first" class="content">
        <div class="container container-cart">
            <router-link to="/"><a class="back-btn"><span><</span> BACK TO PRODUCTS</a></router-link>
            <div class="cart-table">
                <div class="row">
                    <div class="first-column column-header">
                        ITEM
                    </div>
                    <div class="second-column column-header">
                        QUANTITY
                    </div>
                    <div class="second-column column-header">
                        PRICE
                    </div>
                    <div class="second-column column-header">
                        TOTAL
                    </div>
                </div>
                
                <div class="row" v-for="(product,index) in cartProducts":key="index">
                    <div class="first-column">
                        <div class="left-content">
                            <img :src="product.image">
                        </div>
                        <div class="right-content">
                            <h1>{{product.name}}</h1>
                            <h2>In stock</h2>
                            <div class="button-container">
                                <a style="margin-right: 12px">Edit</a>
                                <a v-on:click="removeCartItem(product)">remove</a>
                            </div>
                        </div>
                    </div>
                    <div class="second-column">
                        <span>{{qty[product.code]}}</span>
                    </div>
                    <div class="second-column">
                        <span>$95.00</span>
                    </div>
                    <div class="second-column">
                        <span>$95.00</span>
                    </div>
                </div>
            </div>
            <button style="margin-top: 100px" class="btn-animation btn">CHECKOUT</button>
        </div>       
    </section>
</div>
</template>

<script>
import store from "../store/store";

export default {
  store,
  computed: {
    basket() {
      return store.getters.getBasket;
    },
    products() {
      return store.getters.getProducts;
    }
  },
  methods: {
    getSavedProducts() {
      var savedProducts = [];
      for (var i = 0; i < this.products.length; i++) {
        const productName = this.products[i].name;
        if (document.cookie.indexOf(productName) > -1) {
          savedProducts.push(this.products[i]);
        }
      }
      return savedProducts;
    },
    getCookieVal(cookie) {
      if (cookie.indexOf("cart") == 0) {
        return cookie.substring(5, cookie.length);
      }
      return "";
    },
    initCart() {
      this.cartProducts = this.getCartProducts();
    },
    removeCartItem(product) {
      document.cookie =
        product.name + "=cart;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      store.commit("REMOVE_FROM_BASKET", product.code);
      this.initCart();
    },
    getCartProducts() {
      var savedProducts = [];
      this.qty = {};
      for (var i = 0; i < this.basket.length; i++) {
        const productCode = this.basket[i].code;
        const productQty = this.basket[i].qty;
        for (var j = 0; j < this.products.length; j++) {
          if (this.products[j].code == productCode) {
            savedProducts.push(this.products[j]);
            this.qty[productCode] = productQty;
          }
        }
      }
      return savedProducts;
    }
  },
  data() {
    return {
      cartProducts: [],
      qty: {}
    };
  },
  mounted() {
      dataLayer.push({event: 'changePage'});
      setTimeout(() => {
          this.initCart();
      },500)
  }
};
</script>

<style>
#first {
  padding-top: 130px;
}
.cart .container-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: left;
  background-color: #fff !important;
  max-width: 1500px;
  margin: auto;
}

.cart-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
}
.cart-table .row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 15px 0px;
  width: 100%;
}
.cart-table .row .first-column {
  width: 35%;
  display: flex;
}
.cart-table .row .first-column .left-content {
  width: 40%;
  overflow: hidden;
  height: 180px;
}
.cart-table .row .first-column .left-content img {
  height: 100%;
}
.cart-table .row .first-column .right-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 180px;
  margin: -5px 0 0 10px;
  text-align: left;
}
.cart-table .row .first-column .right-content h1 {
  font-size: 1.9em;
  letter-spacing: 0;
  margin: 0;
}
.cart-table .row .first-column .right-content h2 {
  font-size: 1.4em;
  margin-top: auto;
}
.cart-table .row .first-column .right-content .button-container {
  margin-top: auto;
}
.cart-table .row .first-column .right-content .button-container a {
  font-size: 1.3em;
  text-decoration: underline;
}
.cart-table .row .second-column {
  width: 15%;
  text-align: center;
}
.cart-table .row .second-column span {
  font-size: 1.5em;
}
.cart-table .row .column-header {
  display: block !important;
  font-size: 2.1em;
  font-weight: 600;
  color: #545454;
}

.cart .btn {
  border: 1px solid #474e5d;
}
.cart .btn:hover {
  background-color: #474e5d;
}

.back-btn {
  left: 30px;
}
</style>
