<template>
  <div class="flex">
  <button v-on:click = "navigateTo('products')">Products</button>
  <button v-on:click = "navigateTo('cart')">To Cart:{{cart.length}}</button>
  </div>
  <div v-if="page === 'cart'">
    <h1>
      Cart
    </h1>
    <div class="grid">
    <div
        v-for="product in cart"
        class="cart-item"
        v-bind:key="product.id"
    ><div class="grid">
      <img class = "cart-img" v-bind:src="product.image">
      <h1> {{ product.title }} </h1>
      <h3> ${{product.regular_price.value}}</h3>
      <h3>brand "{{product.brand}}"</h3>

      <button class="remove" v-on:click="removeItem(cart)">remove</button>
    </div>
    </div>
    </div>
    <div class="total">
      <h1>Total: {{cartTotal}}$</h1>
    </div>
  </div>
  <div v-if="page === 'products'" class="wrap">
    <div class="brand-nav">
      <router-link to="/">
        <h3>
          All brands
        </h3>
      </router-link>
      <div
          class="list"
          v-for="brand in brands"
          v-bind:key="brand.id"
      >
        <router-link v-bind:to="'/' + brand.id">
        <h3>
          {{brand.title}}
        </h3>
        </router-link>
      </div>

    </div>
    <div class="grid">
      <div
          v-for="product in products"
          class="product-item"
          v-bind:key="product.id"
      >
        <img v-bind:src="product.image">
        <h1> {{ product.title }} </h1>
        <h3> ${{product.regular_price.value}}</h3>
        <h3>brand "{{product.brand}}"</h3>

        <button v-on:click="addItem(product)">add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import  { products, brands } from "@/data.js";

export default {
  name: "MainPage",
  methods: {
    addItem(product){
      this.cart.push(product);
    },
    removeItem(product) {
      this.cart.splice(this.cart.indexOf(product))
    },
    navigateTo(page){
      this.page=page;
    },

  },
  computed:{
    cartTotal(){
      let res = [];

      for (let item of this.cart){
        res.push(item.regular_price.value)
      }
      res = res.reduce(function (sum, el){
          return sum+el;
        })

      return res;
    }
  },
  data(){
    return{
      cart: [],
      page: "products",
      products,
      brands,
      total: 0
    };
  }
}
</script>

<style scoped>
.brand-nav{
  height: 400px;
  width: 200px;
}
.wrap {
  display: flex;
  transition-duration: .2s;
}
.grid{
  display: flex;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  transition-duration: .2s;
}
.product-item{

  height: 450px;
  width: 300px;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 20px;
  transition-duration: .2s;
}
.cart-item{
  width: 100%;
  height: 80px;
  margin: 5px;
  border: 2px solid grey;
  transition-duration: .2s;
}
.cart-img{
  height: 80px;
  width: 80px;
}
button{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
.remove{
  height: 50px;
}
</style>