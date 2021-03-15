<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <form class="form-inline my-2 my-lg-0" >
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
    <router-link to="/add"></router-link>
    <ProductItem v-for="(product,i) in products" :key="product.id"
                 :product="product" :index="(i+1)"></ProductItem>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import ProductService from './ProductService.js';
export default {
  data(){
    return{

      // products:[]
    }
  },
  computed:{
    products(){
      // return this.$store.state.products
      return this.$store.getters.getProducts
    }
  },
  components: {
    ProductItem
  },
  created(){
       //this.products = ProductService.products;
    // this.$store.commit('loadProducts', ProductService.products)
        this.$store.dispatch('loadProducts', ProductService.products)
  }
}
</script>