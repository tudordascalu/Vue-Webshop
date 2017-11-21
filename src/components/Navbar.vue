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
            <li class="menu-item menu-contact"><a>Front Page</a></li>
            <li class="menu-item menu-contact"><a>Products</a></li>
            <li class="menu-item menu-contact"><a href="cart" style="color: #ffb800"><img src="/static/img/cart.png" height="20px"><span v-if="basketItems > 0">{{basketItems}}</span></a></li>
            
            </ul> 
        </nav>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            basketItems: 0
        }
    },   
    methods: {
        getCartItems(items){
            this.basketItems = items; 
        }
    }
}
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
.main-nav a{
    color: #fff;
    text-decoration: none;
    transition-duration: .5s;
}
.main-nav a:hover {
  color: #FFB800;
}
.main-nav.nav-small {
  height: 65px;
  background-color: rgba(71, 78, 93, 0.9);
  position: fixed;
  top: auto;
  left: auto;
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
    margin: auto!important;
}

.main-nav .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#menu-main{
    display: flex;
    list-style: none;
    align-items: center;
}
#menu-main li{
    margin-right: 25px;
}
</style>