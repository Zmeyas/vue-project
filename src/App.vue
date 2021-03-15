<template>
  <div>
    <nav>
      <ul class="nav justify-content-end mr-3 mt-3">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Склад товаров</router-link>
<!--          <a class="nav-link active" href="#">Склад</a>-->
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Добавить товар</router-link>
<!--          <a class="nav-link" href="#">Добавить товар</a>-->
        </li>
        <li class="nav-item">
          <router-link to="/static" class="nav-link">Статистика</router-link>
<!--          <a class="nav-link" href="#">Статистика</a>-->
        </li>
      </ul>
    </nav>
    <div>
      <my-header>
        <h2>Product List</h2>
      </my-header>
      <div class="container">
        <router-view></router-view>
<!--        <products></products>-->
<!--        <div>-->
<!--          <span @click="(mode=(mode == 'view' ? 'add' : 'view'))">{{mode}}</span>-->
<!--          <component :is="componentName"></component>-->
<!--        </div>-->
<!--        <product-details></product-details>-->
<!--        <product-add></product-add>-->
      </div>
    </div>
  </div>
</template>


<script>

import myHeader from './Header.vue'

export default{
  data(){
    return{
        mode:'view'
    }
  },
  computed:{
    componentName(){
      return this.mode == 'view' ? 'ProductDetails' : 'ProductAdd';
    }
  },
  components:{
    myHeader,
    // 'products': ProductsList, ProductDetails,
    // ProductAdd,
  }
}

</script>

<style>
    .container{
      display: flex;
      align-items: flex-start;
    }
</style>
