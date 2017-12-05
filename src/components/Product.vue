<template>
<div class="content-product">
    <section id="first" class="content">
        <div class="container">
        <router-link to="/"><a class="back-btn"><span><</span> BACK TO PRODUCTS</a></router-link>
            <div class="left">
                <div class="img-big">
                    <img :src="product.image">
                </div>  
                <div class="img-small">
                    <img :src="product.image2">
                    <img style="margin: 0 5%;" :src="product.image3">
                    <img v-if="product.image4 != ''" :src="product.image4">
                </div>  
            </div> 
            <div class="right">
                <h2 id="product-name">{{product.name}}</h2>
                <p>{{product.p1}}</p>
                <p>{{product.p2}}</p>
                <p>{{product.p3}}</p>
                <p>{{product.p4}}</p>
                <button class="btn-animation btn" v-on:click="setCookie(product.name, product.code)">ADD TO CART</button>
            </div>
        </div>       
    </section>
</div>

</template>
<script>
import store from "../store/store";

export default {
  store,
  computed: {
    products() {
      return store.getters.getProducts;
    },
    basket() {
      return store.getters.getBasket;
    }
  },
  data() {
    return {
      product: {}
    };
  },
  methods: {
    setCookie(productName, productCode) {
      store.commit("ADD_TO_BASKET", productCode);
      const qty = this.getQtyOfProd(productCode);
      document.cookie = productName + "=" + qty;
      console.log("cookie was set");
    },
    setProduct(productCode) {
      for (var i = 0; i < this.products.length; i++) {
        if (productCode == this.products[i].code) {
          this.product = this.products[i];
        }
      }
    },
    getQtyOfProd(productCode) {
      var itemInBasket = _.find(this.basket, { code: productCode });
      if (itemInBasket) {
        return itemInBasket.qty;
      }
      return 0;
    }
  },
  created() {
    dataLayer.push({event: 'changePage'});
    this.setProduct(this.$route.params.id);
  }
};
</script>
<style scoped>
.back-btn span {
  font-size: 1.3em;
  margin-right: 10px;
}
.content-product #first {
  min-height: 100vh;
  padding-top: 130px;
}
.content-product #first .container {
  height: 700px;
  width: 1000px;
  display: flex;
  background-color: #f4f4f4;
  position: relative;
}

.content-product #first .container .left {
  width: 40%;
  height: 100%;
  min-width: 480px;
  margin: 60px 2.5% 0 5%;
  display: flex;
  flex-direction: column;
}
.content-product #first .container .left .img-big {
  height: 430px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
.content-product #first .container .left .img-big img {
  min-height: 100%;
  width: 100%;
}
.content-product #first .container .left .img-small {
  margin-top: 30px;
  display: flex;
  height: 125px;
}
.content-product #first .container .left .img-small img {
  height: 100%;
  background-color: #fff;
  width: 25%;
  padding: 12px;
}
.content-product #first .container .right {
  width: 40%;
  min-width: 480px;
  margin: 60px 5% 0 2.5%;
  height: 430px;
  position: relative;
}
.content-product #first .container .right button {
  position: absolute;
  bottom: 0;
  background-color: #474e5d;
  color: white;
}
.content-product #first .container .right button:hover {
  background-color: transparent;
  color: #474e5d;
}
.content-product #first .container .right p {
  font-size: 1.2em;
}

.content {
  display: flex;
  justify-content: center;
  text-align: left;
}

.btn {
  border: 1px solid #474e5d;
}
</style>