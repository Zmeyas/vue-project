<template>
  <div class="product">
    <h2>Product Detail</h2>
    <form>
      <div>
        <label for="title" id="title">Title</label>
        <span>{{product.title}}</span>
      </div>
      <div>
        <label for="price" id="price">Price</label>
        <span>{{product.price}}</span>
      </div>
      <div>
        <label for="qt" id="qt" >Quantity</label>
        <span>{{product.qt}}</span>
      </div>
    </form>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import ProductService from './ProductService.js';
export default {
  data(){
    return{
      product: {}
    }
  },
  created() {
    ProductService.$on("viewDetails",(selectedProduct) =>{
      this.product=selectedProduct;
    });
  },
  mounted(){
    ProductService.viewDetails(this.$route.params.id);
  },
}
</script>

<style scoped>
    .product{
      width: 500px;
      border: 3px solid darkblue;
      border-radius: 10px;
      margin:10px;
      padding: 10px;
    }

</style>