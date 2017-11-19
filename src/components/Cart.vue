<template>
<div class="content-product cart">
    <section id="first" class="content">
        <div class="container container-cart">
            <a class="back-btn"><span><</span> BACK TO PRODUCTS</a>
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
                            <img src="/static/img/top-image.77f633a.png">
                        </div>
                        <div class="right-content">
                            <h1>{{product.name}}</h1>
                            <h2>In stock</h2>
                            <div class="button-container">
                                <a style="margin-right: 12px">Edit</a>
                                <a>remove</a>
                            </div>
                        </div>
                    </div>
                    <div class="second-column">
                        <span>1</span>
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

export default {
    methods: {
        getSavedProducts(){ 
            const products = document.cookie.split(';').filter(function(c) {
                return c.trim().indexOf('cart') > -1;
            }).map(function(c) {
                return c.trim();
            });
            return products;
        },
        getCookieVal(cookie) {
            if (cookie.indexOf('cart') == 0) {
                return cookie.substring(5, cookie.length);
            }
            return "";
        },
        initCart() {
            var cookies = this.getSavedProducts();
            for(var i = 0; i < cookies.length; i++) {
                var productName = this.getCookieVal(cookies[i]);
                if(productName) {
                    for(var i = 0; i < this.products.length; i++){
                        if(this.products[i].name.toUpperCase() == productName.toUpperCase()){
                            this.cartProducts.push(this.products[i]);
                        }
                    }
                }
            }
        }
    },
      data() {
        return {
            products: [
              {
                name: "ROSE GOLD",
                image: "/static/img/top-image.77f633a.png",
                p1:" MELBOURNE MINIMAL",
                p2: "$95.00",
                p3: "Pretty in peach.",
                p4: "Glamour without the glitz.",
                p5: "Neutral tones with a brushed rose gold casing and peach Italian leather band."
              }
            ],
            cartProducts: []
        }
    },
    mounted() {
        this.initCart();
    }
}

</script>

<style>
#first{
    padding-top: 130px;
}
.cart .container-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: left;
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

.cart .btn{
    border: 1px solid #474e5d; 
}
.cart .btn:hover{
    background-color: #474e5d;
}

.back-btn{
    left: 30px;
}

</style>
