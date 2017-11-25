<template>
    <div>
        <div v-if="!empty" class="box">
            <img class="box-img" :src="product.boximg" alt="">
            <div class="box-overlay">
                <h3>{{product.name}}</h3>
               <p>Buy our new products here</p>
                 <router-link style="text-decoration: none!important" :to="{ name: 'product', params: { id: product.code }}"><a class="btn-animation btn" style="border:none!important">SHOP NOW</a></router-link>
            </div>
        </div>
        <div v-if="empty" class="box empty-box">
            
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  props: ["product", "empty"],
  data() {
    return {};
  },
  methods: {
    seeProduct(product) {
      //   console.log("Button clicked ->", product);
      this.$emit("see-product", product);
    }
  }
};
</script>

<style>
.box {
  width: 340px;
  height: 278px;
  margin: 25px;
  position: relative;
  opacity: 1;
  transition-duration: 0.5s;
}
.empty-box {
  height: 0 !important;
}
.box-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0,0,0,.3); */
}
h3 {
  font-size: 2.3em;
  margin: 0;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
}
p {
  color: #fff;
  margin-bottom: 50px;
}
.box-img {
  width: 100%;
  height: 100%;
}
</style>