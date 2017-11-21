<template>
  <div id="app">
    <navbar v-bind:cartItems="items"></navbar>
    <router-view v-on:add-cart="addCart"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  data() {
    return {
      items: 0,
      products: [
          {
            name: "ROSE GOLD",
            image: "/static/img/products/watches/1.png",
            image2: "/static/img/products/watches/2.png",
            image3: "/static/img/products/watches/3.png",
            image4: "/static/img/products/watches/4.png",
            category: "watch",
            p1:" MELBOURNE MINIMAL",
            p2: "$95.00",
            p3: "Pretty in peach.",
            p4: "Glamour without the glitz.",
            p5: "Neutral tones with a brushed rose gold casing and peach Italian leather band."
          },
          {
            name: "SUNGLASSES",
            image: "/static/img/products/sunglasses/1.jpg",
            image2: "/static/img/products/sunglasses/2.jpeg",
            image3: "/static/img/products/sunglasses/3.jpg",
            image4: "",
            category: "sunglasses",
            p1:" MELBOURNE MINIMAL",
            p2: "$95.00",
            p3: "Pretty in peach.",
            p4: "Wide Fit Oxford Brogue Sunglasses In Burgundy Leather.",
            p5: ""
          },
          {
            name: "BROGUE SHOES",
            image: "/static/img/products/shoes/1.png",
            image2: "/static/img/products/shoes/2.png",
            image3: "/static/img/products/shoes/3.png",
            image4: "/static/img/products/shoes/4.png",
            category: "shoes",
            p1:" MELBOURNE MINIMAL",
            p2: "$95.00",
            p3: "Color: Burgundy",
            p4: "Wide Fit Oxford Brogue Sunglasses In Burgundy Leather.",
            p5: ""
          }
        ]
    }
  },
  components: {
    Navbar
  },
  methods : {
    addCart(){
      console.log("da");
      this.items = this.getCartItems();
    },
    getCartItems() { 
      var cartItems = 0;
      for( var i = 0; i < this.products.length; i++){
          const productName = this.products[i].name;
          if(document.cookie.indexOf(productName) > -1) {
            cartItems++;
          }
      }
      return cartItems;
    }
  },
  mounted() {
    this.addCart();
  }
}
</script>

<style>

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGOC.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGCI.TTF') format('opentype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGCB.TTF') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGOC.TTF') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('https://s3.eu-central-1.amazonaws.com/sitecampaign/fonts/TRADEGCBI.TTF') format('opentype');
  font-weight: bold;
  font-style: italic;
}
/* 
@font-face {
  font-family: 'Lato Bold';
  src: url('../fonts/Lato-Bold.TTF') format('opentype');
}  */

#app {
  font-family: 'Trade Gothic Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474e5d;
  /* margin-top: 60px; */
}

h1{
  font-size: 3em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

header{
  color: #fff;
}

.btn{
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  border: none;
  /* border: 1px solid #fff; */
  background-color: #fff;
  border-radius:2px;
  padding: 15px;
  text-transform: uppercase;
  color: #545454;
  transition-duration: 1s;
  font-family: 'Trade Gothic Condensed';
}
.btn:hover {
    background-color: #ffb800;
    /* border-color: #ffb800; */
    color: #fff;
}
.back-btn{
  position: absolute;
  top: -45px;
  left: 0;
  color: #474e5d;
  font-size: 1em;
  font-weight: 600;
  text-decoration: none!important;
}
.right p{
    color: #474e5d;
}

a{
  cursor: pointer;
}
</style>
