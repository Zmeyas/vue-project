<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card=title">{{index}}{{product.title}}</h4>
      <p class="card-text">{{product.qt}}items for ${{product.price}}</p>
      <a href="#" class="btn btn-primary" @click="viewDetailsClicked">View Details</a>
    </div>
  </div>
</template>

<script>
import ProductService from './ProductService.js';
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    index:{
      type: Number
    }
  },
  data(){
    return{
      //product:{},
      //index:1
    }
  },
  methods:{
    viewDetailsClicked(){
       //this.$emit("viewDetails", this.product.id);
      ProductService.viewDetails(this.product.id);
      this.$router.push('/detail/'+this.product.id)
    }
  }
}
</script>

<style>
    div.card{
        width: 500px;
        border: 1px solid darkblue;
        border-radius:10px;
        margin: 10px;
        padding: 10px;
    }
</style>