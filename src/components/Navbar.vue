<template>
<div class="main-nav nav-small">

  <div class="container">

    <a class="brand">
        <img style="margin-top:-3px"class="second-logo-image" src="/static/img/logo.png" alt /> 
    </a>

    <div>
        <!-- <a class="menu-btn btn light">Menu</a> -->
        <nav class="nav-primary light">
            <a class="btn-close-menu btn-close"></a>
            <ul id="menu-main" class="nav">
            <li class="menu-item menu-contact"><router-link to="/"><a>Front Page</a></router-link></li>
            <li class="menu-item menu-contact"><router-link to="/"><a>Products</a></router-link></li>
            <li class="menu-item menu-contact"><router-link :to="{name:'cart'}"><a style="color: #ffb800"><img src="/static/img/cart.png" height="20px"><span id="cart-items" v-if="cartItems > 0">{{cartItems}}</span></a></router-link></li>
            
            </ul> 
        </nav>
    </div>
  </div>
</div>
</template>
<script>
import store from "../store/store";
export default {
  store,
  computed: {
    cartItems() {
      return store.getters.getQty;
    }
  },
  data() {
    return {
      basketItems: 0
    };
  },
  methods: {
    getCartItems(items) {
      this.basketItems = items;
    }
  },
  mounted() {
    dataLayer.push({event: 'changePage'});
  }
};
</script>

<style>
.main-nav {
  z-index: 1000;
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 2px;
  color: #fff;
}
.main-nav a {
  color: #fff;
  text-decoration: none;
  transition-duration: 0.5s;
}
.main-nav a:hover {
  color: #ffb800;
}
.main-nav.nav-small {
  height: 65px;
  background-color: rgba(71, 78, 93, 0.9);
  position: fixed;
  top: auto;
  left: auto;
}
#cart-items {
  margin-left: 4px;
  font-size: 20px;
}
.brand {
  width: 50px;
  height: 60px;
  margin-top: 5px;
}

.brand img {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto !important;
}

.main-nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#menu-main {
  display: flex;
  list-style: none;
  align-items: center;
}
#menu-main li {
  margin-right: 25px;
}
</style>