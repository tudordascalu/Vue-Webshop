<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import store from "./store/store";
import * as $ from "jquery";
export default {
  store,
  components: {
    Navbar
  },
  name: "app",
  computed: {
    products() {
      return store.getters.getProducts;
    }
  },
  data() {
    return {
      items: 0
    };
  },
  methods: {
    getBasketItems() {
      var basket = [];
      var that = this;
      $.each(document.cookie.split(/; */), function() {
        var splitCookie = this.split("=");
        for (var i = 0; i < that.products.length; i++) {
          if (that.products[i].name == splitCookie[0]) {
            const basketItem = {
              code: that.products[i].code,
              qty: Number(splitCookie[1])
            };
            basket.push(basketItem);
          }
        }
      });
      store.commit("SET_BASKET", basket);
    }
  },
  mounted() {
    this.getBasketItems();
  }
};
</script>

<style>
@font-face {
  font-family: "Trade Gothic Condensed";
  src: url("https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGOC.TTF")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Trade Gothic Condensed";
  src: url("https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGCI.TTF")
    format("opentype");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Trade Gothic Condensed";
  src: url("https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGCB.TTF")
    format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Trade Gothic Condensed";
  src: url("https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGOC.TTF")
    format("truetype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Trade Gothic Condensed";
  src: url("https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGCBI.TTF")
    format("opentype");
  font-weight: bold;
  font-style: italic;
}
/* 
@font-face {
  font-family: 'Lato Bold';
  src: url('../fonts/Lato-Bold.TTF') format('opentype');
}  */

#app {
  font-family: "Trade Gothic Condensed", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474e5d;
  /* margin-top: 60px; */
}

h1 {
  font-size: 3em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

header {
  color: #fff;
}

.btn {
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  border: none;
  /* border: 1px solid #fff; */
  background-color: #fff;
  border-radius: 2px;
  padding: 15px;
  text-transform: uppercase;
  color: #545454;
  transition-duration: 1s;
  font-family: "Trade Gothic Condensed";
}
.btn:hover {
  background-color: #ffb800;
  /* border-color: #ffb800; */
  color: #fff;
}
.back-btn {
  position: absolute;
  top: -45px;
  left: 0;
  color: #474e5d;
  font-size: 1em;
  font-weight: 600;
  text-decoration: none !important;
}
.right p {
  color: #474e5d;
}

a {
  cursor: pointer;
}
</style>
