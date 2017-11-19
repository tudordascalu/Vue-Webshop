<template>
    <div>
        <div v-if="!empty" class="box">
            <img class="box-img" :src="product.image" alt="">
            <div class="box-overlay">
                <h3>{{product.name}}</h3>
                <p>Buy our new products here</p>
                <a class="btn-animation btn" v-on:click="seeCase(product)">VIEW CASE STUDY</a>
            </div>
        </div>
        <div v-if="empty" class="box empty-box">
            
        </div>
    </div>
</template>

<script type="text/javascript">
  export default {
    props: ['product', 'empty'],
    data() {
        return {

        }
    },
    methods: {
      seeCase() {
          console.log("Button clicked ->", product);
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
    transition-duration :.5s;   
} 
.empty-box{
    height: 0!important;
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
    background-color: rgba(0,0,0,.25);
}
h3 {
    font-size:2.3em;
    margin: 0;
    text-transform: uppercase;
    font-weight: 900; 
    color: #fff;
}
p{
    color: #fff;
    margin-bottom: 50px;
}
.box-img {
    width: 100%;
    height: 100%;
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
}
.btn:hover {
    background-color: #ffb800;
    /* border-color: #ffb800; */
    color: #fff;
}

</style>