<template>
<div class="main-nav nav-small">

  <div class="container">

    <a class="brand">
        <!-- <img style="margin-top:-3px"class="second-logo-image" width="50" height="60"  src="<?= get_template_directory_uri(); ?>/dist/images/logo-transparent.svg" alt />  -->
    </a>

    <div>
        <!-- <a class="menu-btn btn light">Menu</a> -->
        <nav class="nav-primary light">
            <a class="btn-close-menu btn-close"></a>
            <ul id="menu-main" class="nav">
            <li class="menu-item menu-contact"><a href="#contact">Front Page</a></li>
            <li class="menu-item menu-contact"><a href="#contact">Products</a></li>
            <li class="menu-item menu-contact"><a href="#contact">Cart</a></li>
            
            </ul> 
        </nav>
    </div>
  </div>
</div>
</template>
<script>
export default {
  
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

.main-nav .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#menu-main{
    display: flex;
    list-style: none;
}
#menu-main li{
    margin-right: 25px;
}
</style>