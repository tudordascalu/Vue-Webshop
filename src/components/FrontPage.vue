<template>
<div>
  <div>
  <header id="landing-product" class="landing landing-clients">
    <div class="background-image">
        <div class="image-overlay">
            <header>
                <h1 class="light main-title">SITECAMPAIGN SHOP</h1>
                <p class="sub-title light">
                   Improve your conversation rates through visitor segmentation and personalized marketing messages
                </p>
            </header>
        </div>
    </div>
  </header>
  

  <section class="content content-gallery content-product" style="flex-direction: column">
    <div class="header flex-header">
        <div class="hr-line"></div>
        <h2>NEWS</h2>
        <div class="hr-line"></div>
    </div>
   <div class="flex-box-container">
     <product-box v-for="(product, index) in products":key="index" v-bind:product="product"></product-box>
     <product-box v-bind:product="products[0]" v-bind:empty="true"></product-box>
     <product-box v-bind:product="products[0]" v-bind:empty="true"></product-box>
     <product-box v-bind:product="products[0]" v-bind:empty="true"></product-box>
    </div>
    <div class="header flex-header">
        <div class="hr-line"></div>
        <h2>SALE</h2>
        <div class="hr-line"></div>
    </div>
   <div class="flex-box-container">
     <product-box v-for="(product, index) in products":key="index" v-bind:product="product" ></product-box>
     <product-box v-bind:product="products[0]" v-bind:empty="true"></product-box>
     <product-box v-bind:product="products[0]" v-bind:empty="true"></product-box>
     <product-box v-bind:product="products[0]" v-bind:empty="true"></product-box>
    </div>
  </section>
  </div>
</div>
</template>

<script type="text/javascript">
import ProductBox from "./ProductBox";
import Product from "./Product";
import store from "../store/store";
export default {
  store,
  components: {
    ProductBox,
    Product
  },
  computed: {
    products() {
      return store.getters.getProducts;
    }
  },
  created() {
    dataLayer.push({event: 'changePage'});
    store.getters.getProducts;
  }
};
</script>

<style>
.landing {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.background-image {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/static/img/top-image.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
}
@media (min-width: 1024px) {
  .background-image {
    background-attachment: fixed;
  }
}
.image-overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  text-align: center;
  width: 400px;

  /* margin-top: 80px; */
  max-width: 100%;
}
@media (min-width: 768px) {
  heder {
    width: 600px;
    /* margin-top: 100px; */
  }
}

.squares-wrapper {
  margin-top: 30px;
}

@media (min-width: 1400px) {
  .landing {
    height: 70vh;
  }
  .background-image {
    height: 70vh;
  }
  .image-overlay {
    height: 70vh;
  }
}
header {
  width: 600px;
}
.sub-title {
  font-weight: 200;
  font-size: 2em;
  line-height: 1.2;
  margin-top: -7px;
}
.flex-header {
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
}
.hr-line {
  width: 42%;
  background-color: #545454;
  height: 3px;
}

h2 {
  font-size: 2em;
}
.flex-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1400px;
}
</style>